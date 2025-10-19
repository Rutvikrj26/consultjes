// Design System - Modern & Elegant Theme
export const colors = {
  // Primary Colors - More sophisticated palette
  navy: {
    900: '#0A1929', // Deep navy for headers
    800: '#1B3A52', // Primary brand navy
    700: '#2C4A62', // Lighter navy for hover states
    600: '#3D5A72', // Subtle navy for borders
  },
  gold: {
    600: '#C19A2E', // Deeper gold for sophistication
    500: '#D4AF37', // Primary brand gold
    400: '#E4C259', // Light gold for hover
    300: '#F4D03F', // Bright gold for accents
  },
  // Neutral Colors - Extended palette for depth
  neutral: {
    50: '#FAFBFC',  // Almost white
    100: '#F5F7FA', // Light backgrounds
    200: '#E8ECF1', // Subtle borders
    300: '#CBD5E0', // Borders
    400: '#A0AEC0', // Disabled states
    500: '#718096', // Muted text
    600: '#4A5568', // Secondary text
    700: '#2D3748', // Primary text
    800: '#1A202C', // Dark text
    900: '#171923', // Almost black
  },
  // Semantic Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F7FA',
    tertiary: '#E8ECF1',
  },
  text: {
    primary: '#1A202C',
    secondary: '#4A5568',
    tertiary: '#718096',
    inverse: '#FFFFFF',
  },
};

export const typography = {
  fonts: {
    heading: '"Montserrat", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
    mono: '"Roboto Mono", "SF Mono", Monaco, monospace',
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
};

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  base: '0.5rem',  // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  // Colored shadows for elevation
  navySm: '0 4px 12px rgba(27, 58, 82, 0.08)',
  navyMd: '0 8px 24px rgba(27, 58, 82, 0.12)',
  navyLg: '0 16px 40px rgba(27, 58, 82, 0.16)',
  goldGlow: '0 0 20px rgba(212, 175, 55, 0.3)',
};

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
  slowest: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const zIndex = {
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
};
