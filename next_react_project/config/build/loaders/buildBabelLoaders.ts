import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export function buildBabelLoaders({ isTsx, isDev }: BuildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                        },
                    ],
                    // [
                    //     '@babel/plugin-transform-typescript',
                    //     {
                    //         isTsx,
                    //     },
                    // ],
                    // '@babel/plugin-transform-runtime',
                    // isTsx && !isDev && [
                    //     babelRemovePropsPlugin,
                    //     {
                    //         props: ['data-testid'],
                    //     },
                    // ],
                    // isDev && require.resolve('react-refresh/babel'),
                ],
            },
        },
    };
}
