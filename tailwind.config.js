/** @type {import('tailwindcss').Config} */
const config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['class'],
  safelist: ['dark'],
  theme: {
    fontSize: {
      12: ['0.75rem', '1.063rem'],
      14: ['0.875rem', '1.25rem'],
      16: ['1rem', '1.438rem'],
      18: ['1.125rem', '1.625rem'],
      20: ['1.25rem', '1.75rem'],
      24: ['1.5rem', '1.813rem'],
      mobile12: ['var(--mobile12)', 'normal'],
      mobile14: ['var(--mobile14)', 'normal'],
      mobile16: ['var(--mobile16)', 'normal'],
      mobile18: ['var(--mobile18)', 'normal'],
      mobile28: ['var(--mobile28)', 'normal'],
      mobile34: ['var(--mobile34)', 'normal'],
      mobile58: ['var(--mobile58)', 'normal'],
      desktop16: ['var(--desktop16)', 'normal'],
      desktop20: ['var(--desktop20)', '140%'],
      desktop24: ['var(--desktop24)', '128%'],
      desktop30: ['var(--desktop30)', '128%'],
      desktop40: ['var(--desktop40)', '128%'],
      desktop64: ['var(--desktop64)', 'normal'],
      desktop196: ['var(--desktop196)', '100%'],
      28: ['var(--28)', 'var(--28)'],
      34: ['var(--34)', 'var(--34)'],
      38: ['var(--38)', 'var(--38)'],
      40: ['var(--40)', 'var(--40)'],
      48: ['var(--48)', 'var(--48)'],
      56: ['3.5rem', 'rem'],
      64: ['var(--64)', 'var(--64)'],
      80: ['var(--80)', 'var(--80)'],
      96: ['6rem', '6rem'],
    },
    screens: {
      sm: '360px',
      450: '450px',
      640: '640px',
      md: '768px',
      lg: '1024px',
      1280: '1280px',
      xl: '1440px',
      xxl: '1920px',
      uhd: '2120px',
    },
    extend: {
      colors: {
        primary: '#F7F4F0',
        primaryBlack: 'rgba(18, 18, 18)',
        toxic: 'rgba(232, 255, 1)',
        background: 'rgba(236, 229, 209, 1)',
        red: 'rgba(255, 0, 0, 1)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
