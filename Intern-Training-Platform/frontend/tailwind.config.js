/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D81B60', // accent like edu brands
        accent: '#1E88E5'
      }
    }
  },
  plugins: []
};
