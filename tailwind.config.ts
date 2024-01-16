import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        brand: {
          yellow: '#FFDF38',
          orange: {
            500: "#FF7C2E",
            400: "#E56F29",
            200: "#CC6324"
          },
          blue: '#428EC5'
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
}
export default config
