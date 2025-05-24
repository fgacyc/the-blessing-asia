// Theme Configuration
// This file centralizes all theme-related configurations for easy management

export const themeColors = {
  // Primary Color Palette (Orange)
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316', // Main primary color
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },

  // Secondary Color Palette (Yellow/Amber)
  secondary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308', // Main secondary color
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },

  // Accent Color Palette (Purple/Magenta)
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef', // Main accent color
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },

  // Background Colors
  background: {
    primary: '#0f172a',    // Main dark background
    secondary: '#1e293b',  // Secondary dark background
    tertiary: '#334155',   // Lighter dark background
    glass: 'rgba(255, 255, 255, 0.1)',      // Glass effect
    glassDark: 'rgba(0, 0, 0, 0.3)',        // Dark glass effect
  },

  // Text Colors
  text: {
    primary: '#ffffff',    // Main text color
    secondary: '#cbd5e1',  // Secondary text color
    muted: '#64748b',      // Muted text color
    accent: '#fdba74',     // Accent text color (primary-300)
  },

  // Border Colors
  border: {
    primary: 'rgba(255, 255, 255, 0.1)',    // Main border
    secondary: 'rgba(255, 255, 255, 0.05)',  // Subtle border
    accent: '#f97316',     // Accent border (primary-500)
  },
};

// Gradient Definitions
export const gradients = {
  primary: 'linear-gradient(135deg, #f97316, #eab308)',           // Orange to Yellow
  secondary: 'linear-gradient(135deg, #1e293b, #334155)',         // Dark gradient
  accent: 'linear-gradient(135deg, #d946ef, #f97316)',           // Purple to Orange
  hero: 'linear-gradient(to bottom, #111827, #1f2937, #000000)', // Hero background
  card: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.8))', // Card gradient
};

// Component-specific theme configurations
export const componentThemes = {
  button: {
    primary: {
      background: gradients.primary,
      text: themeColors.text.primary,
      hover: 'linear-gradient(135deg, #ea580c, #ca8a04)',
    },
    secondary: {
      background: themeColors.background.tertiary,
      text: themeColors.text.primary,
      hover: themeColors.background.secondary,
    },
    outline: {
      border: themeColors.border.accent,
      text: themeColors.primary[500],
      hover: {
        background: themeColors.primary[500],
        text: themeColors.text.primary,
      },
    },
  },

  card: {
    default: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: themeColors.border.primary,
      backdrop: 'blur(8px)',
    },
    glass: {
      background: themeColors.background.glass,
      border: 'rgba(255, 255, 255, 0.2)',
      backdrop: 'blur(8px)',
    },
    solid: {
      background: themeColors.background.secondary,
      border: themeColors.border.primary,
    },
  },

  navigation: {
    background: 'rgba(15, 23, 42, 0.9)',
    border: themeColors.border.primary,
    logo: {
      background: themeColors.background.tertiary,
      text: themeColors.text.primary,
    },
    item: {
      text: themeColors.text.secondary,
      textHover: themeColors.text.primary,
      backgroundHover: 'rgba(51, 65, 85, 0.5)',
      accent: themeColors.text.accent,
    },
  },
};

// Responsive breakpoints (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Animation configurations
export const animations = {
  transition: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    default: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Utility function to get CSS custom property
export const getCSSVar = (path) => {
  const pathArray = path.split('.');
  let current = themeColors;
  
  for (const key of pathArray) {
    current = current[key];
    if (current === undefined) {
      console.warn(`Theme path "${path}" not found`);
      return null;
    }
  }
  
  return current;
};

// Utility function to generate CSS custom properties
export const generateCSSVars = () => {
  const vars = {};
  
  // Generate color variables
  Object.entries(themeColors).forEach(([category, colors]) => {
    if (typeof colors === 'object' && !Array.isArray(colors)) {
      Object.entries(colors).forEach(([shade, value]) => {
        vars[`--${category}-${shade}`] = value;
      });
    } else {
      vars[`--${category}`] = colors;
    }
  });
  
  // Generate gradient variables
  Object.entries(gradients).forEach(([name, value]) => {
    vars[`--gradient-${name}`] = value;
  });
  
  return vars;
};

export default {
  colors: themeColors,
  gradients,
  componentThemes,
  breakpoints,
  animations,
  getCSSVar,
  generateCSSVars,
};
