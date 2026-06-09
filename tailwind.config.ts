import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        brand: {
          blue: '#0066FF',
          purple: '#6B21F5',
          teal: '#14B8A6',
          navy: '#0F172A',
          ink: '#1E293B',
          muted: '#64748B',
          soft: '#F1F5F9',
          bg: '#F8FAFC',
          border: '#E2E8F0',
          dark: '#020617',
          surface: '#0F172A',
          surfaceBorder: '#1E293B'
        }
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '999px'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)',
        card: '0 18px 50px rgba(15, 23, 42, 0.10)',
        glow: '0 24px 90px rgba(0, 102, 255, 0.25)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
