import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
  {
    files: ["src/**/*"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        createDefaultProgram: true,
        projectService: ['**/tsconfig.json'],
        tsconfigRoot: import.meta.url,
      },
      ecmaVersion: 'latest',
    },
    plugins: {
      '@stylistic': stylistic
    },
  },
  {
    ignores: ["node_modules/**", "public/**", "build/**", "dist/**"],
  },
];
