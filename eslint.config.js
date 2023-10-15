import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default [
  ...antfu({
    overrides: {
      typescript: {
        'node/prefer-global/process': ['error', 'always'],
        'unicorn/prefer-node-protocol': 'off',
        'no-console': 'off',
      },
    },
  }),
  unocss,
]
