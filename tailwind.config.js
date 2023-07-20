import plugin from "tailwindcss/plugin";
import forms from "@tailwindcss/forms";
import aspect from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		aspect,
		plugin(({ matchUtilities }) => {
			matchUtilities({});
		}),
	],
};
