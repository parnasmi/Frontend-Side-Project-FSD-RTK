import webpack from 'webpack'
import { BuildOptions } from './types/config'

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const ReactRefreshTypeScript = require('react-refresh-typescript');

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

    const babelLoader = {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
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
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: isDev,
            },
          },
        ],
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoaders,
        scssLoaders
    ]
}