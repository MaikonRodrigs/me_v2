import type { Config } from 'tailwindcss'

const config: Config = {
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
        'background' : '#DEE5E5',
        'primaryColor' : '#28262C'
      },
      theme: {
        extend: {
          colors: {
            light: {
              background: 'white',
              text: 'black',
            },
            dark: {
              background: 'black',
              text: 'white',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
