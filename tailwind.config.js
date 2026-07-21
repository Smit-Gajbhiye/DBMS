/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#FFF8FC',
          lavender: '#CDB4DB',
          lavenderLight: '#F3E8FF',
          babyBlue: '#BDE0FE',
          babyBlueLight: '#E8F4FF',
          sage: '#CDEAC0',
          sageLight: '#EBF7E5',
          pink: '#FFC8DD',
          pinkLight: '#FFF0F5',
          textDark: '#2D3748',
          textMuted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(205, 180, 219, 0.15)',
        'soft-md': '0 4px 20px rgba(205, 180, 219, 0.2)',
        'soft-lg': '0 10px 30px rgba(205, 180, 219, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
