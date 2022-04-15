import toml from 'toml';
import path from 'path';
import fs from 'fs';

const __root = path.resolve(__dirname, '../../');
const configFilePath = path.resolve(__root, './blooog.toml');
try {
  if (fs.statSync(configFilePath).isFile()) {
    console.log('配置存在');
  }
} catch (error) {
  console.error('配置文件不存在');
}

export default toml.parse(fs.readFileSync(configFilePath).toString());