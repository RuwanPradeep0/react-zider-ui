import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

export default {
treeshake: true,
  input: 'src/index.js', // Entry point for your component
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs', // CommonJS module format
    },
    {
      file: 'dist/index.es.js',
      format: 'es', // ES module format
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    resolve(),
    external(),
  ],
  extensions: ['.js', '.jsx'],
};