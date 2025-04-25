import { Plugin } from 'esbuild';
import fs from 'fs';
import path from 'path';

// 定义插件选项的类型
interface PluginOptions {
  matchContent?: RegExp; // 匹配内容的正则表达式，默认匹配 __VERSION__
}

// 插件主函数
function createEsbuildPlugin(options: PluginOptions = {}): Plugin {
  const { matchContent = /__VERSION__/g } = options;

  return {
    name: 'esbuild-plugin-sync-version', // 插件名称
    setup(build) {
      // 获取 package.json 的路径
      const packageJsonPath = path.resolve(process.cwd(), 'package.json');

      // 读取 package.json 并提取 version 字段
      let version: string;
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
        if (!packageJson.version) {
          throw new Error('package.json 中未找到 version 字段');
        }
        version = packageJson.version;
      } catch (err) {
        console.error('读取 package.json 失败:', (err as any).message);
        process.exit(1);
      }

      // 监听文件加载事件
      build.onLoad({ filter: /.*/ }, async (args) => {
        // 读取文件内容
        const contents = await fs.promises.readFile(args.path, 'utf-8');

        // 替换匹配的内容为 version
        const replacedContents = contents.replace(matchContent, version);

        // 返回处理后的内容
        return {
          contents: replacedContents,
          loader: 'default' // 保持默认加载器
        };
      });
    }
  };
}

export default createEsbuildPlugin;
