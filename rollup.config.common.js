import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export const plugins = [
  nodeResolve(),
  commonjs({ include: '**/node_modules/**' }),
  babel({
    exclude: 'node_modules/**'
  })
]

export default {
  input: 'src/index.js',
  external: [
    'react',
    'prop-types'
  ]
}
