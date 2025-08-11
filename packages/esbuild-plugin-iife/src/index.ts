import {Plugin} from 'esbuild';

// 定义插件选项的类型
interface PluginOptions {
  globalName: string;
}

// 插件主函数
function createEsbuildPlugin(options: PluginOptions): Plugin {
  return {
    name: 'esbuild-plugin-iife', // 插件名称
    setup(build) {
      build.onEnd(async (result) => {
        if (build.initialOptions.format === 'iife') {
          for (const output of result.outputFiles || []) {
            if (output.path.endsWith('.js')) {
              output.contents = Buffer.from(
                output.text.replace(
                  'var index_default',
                  `(typeof globalThis !== "undefined"
                  ? globalThis : typeof self !== "undefined"
                  ? self : typeof window !== "undefined"
                  ? window : Function("return this")()
                ).${options?.globalName} `
                )
              );
            }
          }
        }
      });
    }
  };
}

export default createEsbuildPlugin;
