/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#21152B',  // Darkest purple
          800: '#2C1D3A',  // Dark purple
          700: '#382449',  // Medium-dark purple
          600: '#432B57',  // Medium purple
          500: '#4E3366',  // Light-medium purple
          400: '#644280',  // Light purple
          300: '#7A519A',  // Lighter purple
          200: '#9061B3',  // Very light purple
          100: '#A571CC',  // Lightest purple
        },
        dark: {
          950: '#0A0808',  // Almost black
          900: '#121010',  // Very dark
          800: '#1A1818',  // Dark
          700: '#232020',  // Medium dark
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        ticker: 'ticker 30s linear infinite',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #21152B, #382449)',
        'gradient-dark': 'linear-gradient(to right, #0A0808, #1A1818)',
      },
    },
  },
  plugins: [],
};