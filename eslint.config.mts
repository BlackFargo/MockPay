import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
	globalIgnores([
		'**/node_modules',
		'**/dist',
		'**/build',
		'**/.vite',
		'**/.turbo',
	]),

	//
	js.configs.recommended,
	...tseslint.configs.recommended,

	// Сommon rules for all files
	{
		files: ['**/*.{ts,tsx,js}'],
		rules: {
			'no-console': 'warn',
			semi: ['error', 'never'],
			quotes: ['error', 'single'],
		},
	},

	// Frontend (React)
	{
		files: ['frontend/**/*.{ts,tsx}'],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: {
			react,
		},
		settings: {
			react: {
				version: 'detect',
				jsxRuntime: 'automatic',
			},
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
		},
	},

	// React Hooks
	{
		files: ['frontend/**/*.{ts,tsx}'],
		...reactHooks.configs.flat.recommended,
	},

	// React Refresh
	{
		files: ['frontend/**/*.{ts,tsx}'],
		...reactRefresh.configs.vite,
	},

	// Backend (Node)
	{
		files: ['backend/**/*.{ts,js}'],
		languageOptions: {
			globals: globals.node,
		},
	},
])
