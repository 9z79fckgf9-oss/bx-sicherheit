/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF9F6',
          pure: '#FFFFFF',
          subtle: '#F2EFE9',
          border: '#E8E5DD',
        },
        ink: {
          DEFAULT: '#0F1115',
          soft: '#24272E',
        },
        body: {
          DEFAULT: '#3A3A36',
          soft: '#5B5B57',
          muted: '#8A8A85',
        },
        // Dynamic theme variables with full alpha support (e.g. bg-blue-hero/20)
        blue: {
          hero: 'rgb(var(--c-hero-rgb) / <alpha-value>)',
          deep: 'rgb(var(--c-deep-rgb) / <alpha-value>)',
          dark: 'rgb(var(--c-dark-rgb) / <alpha-value>)',
          night: 'rgb(var(--c-night-rgb) / <alpha-value>)',
        },
        seagreen: {
          DEFAULT: '#2E8B57',
          hover: '#359E63',
          deep: '#1A432F',
          dark: '#143424',
          light: '#EBF5EF',
        },
        yellow: {
          accent: '#F5B417',
          hi: '#FFC634',
          subtle: '#FDF3D6',
        },
        grey: {
          DEFAULT: '#8A8A85',
          light: '#E2DFD8',
          border: 'rgba(15, 17, 21, 0.12)',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 36s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      maxWidth: {
        shell: '1320px',
      }
    },
  },
  plugins: [],
}
