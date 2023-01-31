import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfigs(options:BuildOptions):Configuration  {
    const {paths, mode} = options
    return {
        mode: mode,
        entry: paths.entry ,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(paths)
    }
}
