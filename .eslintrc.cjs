module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['build', '.eslintrc.cjs', '*.d.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['@typescript-eslint', 'react-refresh'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts', '*.js'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-debugger': 'off',
        'no-shadow': 'off', // ignore warning enum
        'no-undef': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react/jsx-boolean-value': 'error',
        'react/react-in-jsx-scope': 'off',
        semi: 'off',
      },
    },
  ],
  rules: {
    curly: ['error', 'all'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T'],
        filter: { regex: '^(RootState|AppDispatch)$', match: false },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
}
