/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './countdown-app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(55% 0.3 240)', // Tropical teal
        'primary-content': 'oklch(98% 0.01 240)',
        secondary: 'oklch(70% 0.25 200)', // Tropical coral
        'secondary-content': 'oklch(98% 0.01 200)',
        accent: 'oklch(65% 0.25 160)', // Tropical yellow-green
        'accent-content': 'oklch(98% 0.01 160)',
        neutral: 'oklch(50% 0.05 240)', // Neutral gray
        'neutral-content': 'oklch(98% 0.01 240)',
        'base-100': 'oklch(98% 0.02 240)', // Light background
        'base-200': 'oklch(95% 0.03 240)',
        'base-300': 'oklch(92% 0.04 240)',
        'info': 'oklch(70% 0.2 220)',
        'success': 'oklch(65% 0.25 140)',
        'warning': 'oklch(80% 0.25 80)',
        'error': 'oklch(65% 0.3 30)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        tropicalLight: {
          'primary': 'oklch(55% 0.3 240)',
          'primary-content': 'oklch(98% 0.01 240)',
          'secondary': 'oklch(70% 0.25 200)',
          'secondary-content': 'oklch(98% 0.01 200)',
          'accent': 'oklch(65% 0.25 160)',
          'accent-content': 'oklch(98% 0.01 160)',
          'neutral': 'oklch(50% 0.05 240)',
          'neutral-content': 'oklch(98% 0.01 240)',
          'base-100': 'oklch(98% 0.02 240)',
          'info': 'oklch(70% 0.2 220)',
          'success': 'oklch(65% 0.25 140)',
          'warning': 'oklch(80% 0.25 80)',
          'error': 'oklch(65% 0.3 30)',
        },
      },
    ],
  },
}
