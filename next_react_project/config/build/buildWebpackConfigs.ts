import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfigs(options:BuildOptions):Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: buildPlugins(options),
        watchOptions: {
            // for some systems, watching many files can result in a lot of CPU or memory usage
            // https://webpack.js.org/configuration/watch/#watchoptionsignored
            // don't use this pattern, if you have a monorepo with linked packages
            ignored: /node_modules/,
        },
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
