import path from 'path';
import {Configuration} from 'webpack';
import { BuildPaths, buildWebpackConfigs } from './config/build';

const paths:BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build:path.resolve(__dirname, 'build'),
}

const mode = 'development';

const isDev = mode === 'development'

const config:Configuration = buildWebpackConfigs({
    mode: 'development',
    paths,
    isDev
})
export default config