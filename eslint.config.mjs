import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: [
      'webpack.config.js',
      'eslint.config.js',
      'eslint.config.mjs',
      'playwright.config.mjs',
      '.eslintrc.js',
      'node_modules/**',
      'dist/**'
    ]
  },
  js.configs.recommended,
  {
    files: ['app.js', 'src/**/*.{js,jsx}', 'test/**/*.{js,jsx}'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      eqeqeq: 'error'
    }
  },
  {
    files: ['app.js', 'jest.setup.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node
    },
    rules: {
      'no-console': 'off'
    }
  },
  {
    ...react.configs.flat.recommended,
    files: ['src/**/*.{js,jsx}', 'test/**/*.{js,jsx}'],
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      'react/prop-types': 'off',
      'no-console': 'error'
    }
  }
]
