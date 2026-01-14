/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#1f1f1f',
          secondary: '#2a2a2a',
          tertiary: '#333333',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b8b8b8',
          muted: '#808080',
        },
        flare: {
          red: '#EF4444',
          blue: '#3B82F6',
          green: '#10B981',
          amber: '#F59E0B',
          purple: '#8B5CF6',
          pink: '#EC4899',
          teal: '#14B8A6',
          orange: '#F97316',
        },
        contamination: {
          primary: '#DC2626',
          hover: '#B91C1C',
        },
        severity: {
          1: '#10B981',
          2: '#3B82F6',
          3: '#F59E0B',
          4: '#F97316',
          5: '#EF4444',
        },
        border: '#404040',
        hover: '#383838',
        active: '#4a4a4a',
        accent: {
          primary: '#DC2626',
          secondary: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
