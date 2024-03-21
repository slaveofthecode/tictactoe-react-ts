/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import tailwindcss from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, css, scss, html}"],
	theme: {
		extend: {},
	},
	plugins: [postcssNesting(), tailwindcss(), autoprefixer()],
};
