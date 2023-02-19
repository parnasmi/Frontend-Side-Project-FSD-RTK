import { WebpackConfiguration } from 'webpack-dev-server';
import path from 'path';
import { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: WebpackConfiguration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // todo fix ts types
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoaders(true));

    return config;
};
