module.exports = {
	env: { browser: true, es2020: true },
	extends: ["react-app", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"no-undef": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-pascal-case": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"off",
			{
				ignoreRestSiblings: true,
			},
		],
	},
};
