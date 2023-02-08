import webpack from 'webpack'
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
import { BuildOptions } from './types/config'

export function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[]  {

    const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }

    const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

    const scssLoaders =  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resourcePath:string) => resourcePath.includes(".module."),
                localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
              }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoaders,
        scssLoaders
    ]
}