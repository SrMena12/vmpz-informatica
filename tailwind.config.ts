import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05070E',
        surface: '#0D1424',
        surface2: '#111C34',
        line: '#1B2740',
        electric: '#1F5BFF',
        electric2: '#4C7CFF',
        royal: '#1730B0',
        ink: '#F5F8FF',
        muted: '#8A94A8',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(31,91,255,0.55)',
        'glow-sm': '0 0 22px -6px rgba(31,91,255,0.55)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(31,91,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,91,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
