import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
// import { EsLinter, linterPlugin } from "vite-plugin-linter";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
	const env = loadEnv(configEnv.mode, process.cwd(), "");

	return {
		plugins: [
			react(),
			tsConfigPaths(),
			// linterPlugin({
			// 	include: ["./src/**/*.{ts,tsx}"],
			// 	linters: [new EsLinter({ configEnv })],
			// }),
			svgrPlugin(),
		],
		server: {
			port: Number(env.DEV_PORT) || 5000,
			cors: false,
		},
		build: {
			target: "chrome112",
		},
		publicDir: "public",
	};
});
