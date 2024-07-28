import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    // @ts-ignore
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };
    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map(rule => {
        if (/svg/.test((rule as RuleSetRule).test as string)) {
            return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module!.rules.push(buildCssLoader(true));

    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
        }),
    );
    return config;
};
