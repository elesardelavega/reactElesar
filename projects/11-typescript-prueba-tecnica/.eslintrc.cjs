module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // no obligar tipos de retorno
    'react/react-in-jsx-scope': 'off', // React 17+ no necesita importar React
    'react/prop-types': 'off', // TypeScript reemplaza PropTypes
    'react-hooks/rules-of-hooks': 'error', // reglas de hooks
    'react-hooks/exhaustive-deps': 'warn', // dependencias de useEffect
  },
};
