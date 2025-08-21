/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // InnorMost Brand Colors
      colors: {
        // Brand colors extracted from design
        brand: {
          50: '#FFF4F0',   // Lightest tint
          100: '#FFE4D6',  // Light tint
          200: '#FFCCB3',  // Medium light
          300: '#FFB399',  // Medium
          400: '#FF9A80',  // Medium dark
          500: '#FF6B35',  // Primary brand color (main CTA buttons)
          600: '#E85D2A',  // Darker (active states)
          700: '#D14F1F',  // Much darker
          800: '#BA4114',  // Very dark
          900: '#A3330A',  // Darkest shade
        },
        
        // Neutral color scale
        neutral: {
          0: '#FFFFFF',    // Pure white (main background)
          50: '#F8F9FA',   // Off white (card backgrounds)
          100: '#F1F3F4',  // Light gray (input fields)
          200: '#E6E6E6',  // Border light
          300: '#CCCCCC',  // Border medium
          400: '#B3B3B3',  // Border strong
          500: '#999999',  // Tertiary text
          600: '#666666',  // Secondary text
          700: '#4A4A4A',  // Dark text
          800: '#2E2E2E',  // Very dark text
          900: '#1A1A1A',  // Primary text (headings)
        },
        
        // Surface colors for different background levels
        surface: {
          primary: '#FFFFFF',      // Main background
          secondary: '#F8F9FA',    // Card backgrounds
          tertiary: '#F1F3F4',     // Input fields, subtle areas
          elevated: '#FFFFFF',     // Elevated cards with shadow
        },
        
        // Semantic colors
        success: {
          50: '#F0FDF4',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
      
      // Typography system
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      
      fontSize: {
        // Display sizes (for hero sections)
        'display-xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],     // 48px
        'display-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],   // 36px
        'display-md': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }], // 28px
        
        // Heading sizes
        'heading-xl': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],      // 24px
        'heading-lg': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],     // 20px
        'heading-md': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],    // 18px
        'heading-sm': ['1rem', { lineHeight: '1.4', fontWeight: '600' }],        // 16px
        
        // Body text sizes  
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],       // 18px
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],           // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],       // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],        // 12px
        
        // UI element sizes
        'button-lg': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'button-md': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        'button-sm': ['0.8125rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      
      // Spacing system (8px base unit)
      spacing: {
        '0.5': '0.125rem',   // 2px
        '1': '0.25rem',      // 4px
        '1.5': '0.375rem',   // 6px
        '2': '0.5rem',       // 8px
        '3': '0.75rem',      // 12px
        '4': '1rem',         // 16px
        '5': '1.25rem',      // 20px
        '6': '1.5rem',       // 24px
        '7': '1.75rem',      // 28px
        '8': '2rem',         // 32px
        '10': '2.5rem',      // 40px
        '12': '3rem',        // 48px
        '16': '4rem',        // 64px
        '20': '5rem',        // 80px
        '24': '6rem',        // 96px
        '32': '8rem',        // 128px
        
        // Component-specific spacing
        'card-padding': '1.5rem',        // 24px
        'section-spacing': '4rem',       // 64px  
        'element-margin': '1rem',        // 16px
        'grid-gap': '1.5rem',           // 24px
        'button-padding-y': '0.75rem',   // 12px
        'button-padding-x': '1.5rem',    // 24px
      },
      
      // Border radius system
      borderRadius: {
        'sm': '0.25rem',     // 4px
        'md': '0.5rem',      // 8px
        'lg': '0.75rem',     // 12px
        'xl': '1rem',        // 16px
        '2xl': '1.5rem',     // 24px
        
        // Component-specific radius
        'button': '0.5rem',   // 8px (buttons)
        'card': '0.75rem',    // 12px (cards)
        'input': '0.5rem',    // 8px (form inputs)
        'avatar': '50%',      // Profile images
      },
      
      // Shadow system
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        
        // Brand-specific shadows
        'brand': '0 4px 14px 0 rgb(255 107 53 / 0.15)',
        'card-hover': '0 8px 25px -8px rgb(0 0 0 / 0.15)',
        
        // Focus shadows
        'focus-brand': '0 0 0 3px rgb(255 107 53 / 0.2)',
        'focus-error': '0 0 0 3px rgb(239 68 68 / 0.2)',
      },
      
      // Animation system
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'scale-in': 'scaleIn 0.2s ease-in-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-in-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      
      // Screen breakpoints (responsive design)
      screens: {
        'xs': '375px',    // Mobile
        'sm': '640px',    // Large mobile
        'md': '768px',    // Tablet  
        'lg': '1024px',   // Desktop
        'xl': '1280px',   // Large desktop
        '2xl': '1536px',  // Extra large desktop
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'), 
    require('@tailwindcss/aspect-ratio'),
  ],
};