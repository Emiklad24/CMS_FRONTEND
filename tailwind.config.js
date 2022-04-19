module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			"blue-primary": "#2636C3",
			white: "#ffffff",
			black: "#000000",
			gold: "#FFB61D",
			google: "#DB4437",
			linkedin: "#0e76a8",
			danger: "#CA0B00",
			"background-bg": "#F1EFFF",
			"dark-gray": "#333333",
			"light-gray": "#666666",
			"lighter-gray": "#cecece",
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 200ms ease-in-out",
			},
		},
	},
	plugins: [],
}
