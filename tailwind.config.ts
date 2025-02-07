import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-base': '#FFFFFF',
        'dark-base': '#0F172A',
        'light-sub': '#000000',
        'dark-sub': '#94A3B8',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
        30: '7.5rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      fontSize: {
        '5xs': ['0.5rem', { lineHeight: '0.5rem' }],
        '2xs': ['0.7rem', { lineHeight: '1rem' }],
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      aspectRatio: {
        '2/1': '2 / 1',
        '3/1': '3 / 1',
        '6/1': '6 / 1',
      },
    },
  },
  plugins: [],
}
export default config
