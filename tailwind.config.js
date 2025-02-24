const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important : '#__next',
  theme: {
    extend: {
      colors: {
        logo_main : 'var(--color-logo_main)',
        primary_main : 'var(--color-primary_main)',
        secondary_main : 'var(--color-secondary_main)',
        background : 'var(--color-background)',
        paper_lighter : 'var(--color-paper_lighter)',
        paper : 'var(--color-paper)',
        paper_weird : 'var(--color-paper_weird)',
        text_primary: 'var(--color-text_primary)',
        text_secondary: 'var(--color-text_secondary)',
        text_disabled: 'var(--color-text_disabled)',
        text_tertiary: 'var(--color-text_tertiary)',
        error_main: 'var(--color-error_main)',
        success_main: 'var(--color-success_main)',
        divider: 'var(--color-divider)'
      },
      fontFamily: {
        sans: [
          "IBM Plex Sans",
          "Roboto",
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
  },
  plugins: [],
}
