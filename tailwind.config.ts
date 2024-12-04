import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'gray-scale': {
          0: '#FFFFFF',
          5: '#D9D9D9',
          40: '#898989',
          50: '#727272',
          80: '#2E2E2E',
        },
        primary: {
          5: '#FFF0EA',
          10: '#FED1BD',
          50: '#FC692A',
          70: '#B34B1E',
          80: '#8B3A17',
        },
      },
      boxShadow: {
        'tour-card': '-16px -16px 32px 0px rgba(0, 0, 0, 0.04), 6px 6px 32px 0px rgba(0, 0, 0, 0.04)',
      },
      screens: {
        mobile: '23.4375rem',
        '3xl': '100rem',
      },
      fontFamily: {
        sans: ['heavitas', 'sans-serif'],
        tomatoes: ['tomatoes', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
      keyframes: {
        'dot-navbar-appear': {
          '0%': { opacity: '0', display: 'none' },
          '100%': { opacity: '1' },
        },
        'navbar-hover': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'navbar-hover': 'navbar-hover 0.5s ease-in-out forwards',
        'dot-navbar': 'dot-navbar-appear 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
