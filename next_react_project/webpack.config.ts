import path, { resolve } from 'path';

import { Configuration } from 'webpack';

import { BuildPaths, buildWebpackConfigs, BuildEnv } from './config/build';
import { BuildMode } from './config/build/types/config';

const envPath = `.env.${process.env.NODE_ENV}`;
console.log('envPath', envPath);
console.log('process.env', process.env);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

require('dotenv').config({ path: envPath });

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        locales: resolve(__dirname, 'public', 'locales'),
        buildLocales: resolve(__dirname, 'build', 'locales'),
    };

    const mode = (process.env.NODE_ENV as BuildMode) || 'development';

    const isDev = mode === 'development';
    const PORT = env?.port || 3003;

    console.log('process.env in confg', process.env);
    const apiUrl = process.env.API_URL || 'http://localhost:8001';

    const config: Configuration = buildWebpackConfigs({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
