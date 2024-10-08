// tailwind.config.js
module.exports = {
  darkMode: 'class', // Adiciona suporte para modo escuro com a classe "dark"
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c',
        darkText: '#a0aec0',
        darkBorder: '#2d3748',
      },
    },
  },
  plugins: [],
}
