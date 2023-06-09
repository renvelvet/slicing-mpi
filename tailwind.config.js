/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '335px',
    },
    extend: {
      colors: {
        'blue-primary': '#24326F',
        'black-secondary': '#272121',
        'blue-headline': '#070D59',
        'light-blue-news': '#989494',
        'blue-news': '#1B387B',
        'red-primary': '#ED1C24',
        'blue-radial': '#15366F',
        'blue-radial-via': '#3150A3',
        'blue-linear-gradient': '#103069',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
