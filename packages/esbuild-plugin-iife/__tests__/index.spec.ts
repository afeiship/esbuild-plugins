import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
import temp from 'temp-dir'; // 使用临时目录
import createEsbuildPlugin from '../src';

describe('esbuild-plugin-sync-version', () => {
  const tempDir = path.join(temp, 'test-project'); // 临时项目目录
  const cwd = tempDir;
  const packageJsonPath = path.join(tempDir, 'package.json');
  const entryFilePath = path.join(tempDir, 'index.js');

  beforeAll(() => {
    // 创建临时目录
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // 创建 package.json 文件
    fs.writeFileSync(packageJsonPath, JSON.stringify({ version: '1.0.0' }), 'utf-8');

    // 创建入口文件
    fs.writeFileSync(entryFilePath, `console.log('__VERSION__'); // 版本号占位符`, 'utf-8');
  });

  afterAll(() => {
    // 清理临时目录
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('should replace __VERSION__ with package.json version', async () => {
    const outDir = path.join(tempDir, 'dist');
    const outFile = path.join(outDir, 'bundle.js');

    // 运行 esbuild 构建
    await build({
      entryPoints: [entryFilePath],
      outfile: outFile,
      bundle: true,
      plugins: [createEsbuildPlugin({ cwd, matchContent: /(__VERSION__)/g })]
    });

    // 读取输出文件内容
    const outputContents = fs.readFileSync(outFile, 'utf-8');
    console.log('outputContents: ', outputContents);

    // 断言版本号被正确替换
    expect(outputContents).toContain(`console.log("1.0.0");`);
  });

  it('should handle custom matchContent', async () => {
    const outDir = path.join(tempDir, 'dist-custom');
    const outFile = path.join(outDir, 'bundle.js');

    // 修改入口文件内容
    fs.writeFileSync(entryFilePath, `console.log('MY_VERSION'); // 自定义占位符`, 'utf-8');

    // 运行 esbuild 构建
    await build({
      entryPoints: [entryFilePath],
      outfile: outFile,
      bundle: true,
      plugins: [createEsbuildPlugin({ cwd, matchContent: /(MY_VERSION)/g })]
    });

    // 读取输出文件内容
    const outputContents = fs.readFileSync(outFile, 'utf-8');

    // 断言自定义占位符被正确替换
    expect(outputContents).toContain(`console.log("1.0.0");`);
  });
});
