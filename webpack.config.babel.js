import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/hex.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'hex',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include},
      {test: /\.json$/, 'loader': 'json', include},
    ]
  }
}