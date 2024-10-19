import { resolve } from 'node:path';

const config = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: resolve(import.meta.dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: ['/node_modules/'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
};

export default config;
