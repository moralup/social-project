import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
<<<<<<< HEAD
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
=======
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
<<<<<<< HEAD
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
=======
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
    ];
}

