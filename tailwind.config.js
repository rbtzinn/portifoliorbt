/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'surface-3': 'var(--surface-3)',
        border: 'var(--border)',
        'border-light': 'var(--border-light)',
        text: 'var(--text)',
        'text-soft': 'var(--text-soft)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-dim': 'var(--accent-dim)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        window: '0 24px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 255, 0, 0.04)',
        accent: '0 0 8px var(--accent)',
        'accent-sm': '0 0 6px var(--accent)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.6', transform: 'scale(.85)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'egg-in': {
          from: { opacity: '0', transform: 'scale(.85) translateY(30px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 95% 0)', transform: 'translate(-3px, 0)' },
          '20%': { clipPath: 'inset(33% 0 55% 0)', transform: 'translate(3px, 0)' },
          '40%': { clipPath: 'inset(70% 0 5% 0)', transform: 'translate(-3px, 0)' },
          '60%': { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(3px, 0)' },
          '80%': { clipPath: 'inset(60% 0 20% 0)', transform: 'translate(-2px, 0)' },
        },
        scanline: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '0 40px' },
        },
        'toast-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-out': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(10px)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        blink: 'blink .9s step-end infinite',
        'egg-in': 'egg-in .5s cubic-bezier(.16, 1, .3, 1)',
        scanline: 'scanline 1.2s linear infinite',
        'toast-in': 'toast-in .35s ease forwards',
        'toast-out': 'toast-out .35s ease forwards',
      },
    },
  },
  plugins: [],
}
