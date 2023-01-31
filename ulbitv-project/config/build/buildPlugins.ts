import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin } from "webpack";
import { BuildPaths } from "./types/config";

 export function buildPlugins(paths:BuildPaths) {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin()
    ]
 }