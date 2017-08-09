import CopyWebpackPlugin from 'copy-webpack-plugin';
import { union } from 'ramda';

export default {
  webpack: (config): object => ({
    ...config,
    plugins: union(
      config.plugins,
      [
        new CopyWebpackPlugin([
          {
            from: '../static',
            to: '../static'
          }
        ], { copyUnmodified: true })
      ]
    )
  })
};
