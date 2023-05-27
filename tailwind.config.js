/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        'mono': ['Roboto Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

