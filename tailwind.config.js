/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#0f172a',
        primary: {
          900: '#004d26',
          800: '#006633',
          700: '#007a3d',
          600: '#00994d',
          500: '#00b359',
          400: '#33cc7a',
        },
        neutral: {
          950: '#0A0A0A',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          400: '#94a3b8',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        accent: {
          600: '#B8860B',
          500: '#D4A574',
          400: '#E5B896',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        display: ['Inter', '-apple-system', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 153, 77, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 153, 77, 0.6)' },
        },
      },
      spacing: {
        'section': '10rem', // 160px
        'section-mobile': '5rem', // 80px
      },
    },
  },
  plugins: [],
}
