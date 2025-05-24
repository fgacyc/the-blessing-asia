# Theme System Documentation

## Overview
The Blessing Asia project now includes a comprehensive theme system that makes it easy to manage colors, gradients, and styling across the entire application. The theme system provides three main color palettes and consistent styling utilities.

## 🎨 Color Palettes

### 1. Primary Colors (Orange)
- **Usage**: Main brand colors, primary buttons, accents
- **Range**: `primary-50` (lightest) to `primary-900` (darkest)
- **Main Color**: `primary-500` (#f97316)

### 2. Secondary Colors (Yellow/Amber)
- **Usage**: Secondary buttons, highlights, complementary elements
- **Range**: `secondary-50` (lightest) to `secondary-900` (darkest)
- **Main Color**: `secondary-500` (#eab308)

### 3. Accent Colors (Purple/Magenta)
- **Usage**: Special highlights, call-to-action elements, decorative accents
- **Range**: `accent-50` (lightest) to `accent-900` (darkest)
- **Main Color**: `accent-500` (#d946ef)

## 🛠️ How to Use

### CSS Custom Properties (Recommended)
The theme system provides CSS custom properties that you can use directly in your components:

```css
/* Background colors */
.my-element {
  background-color: var(--bg-primary);     /* Main dark background */
  background-color: var(--bg-secondary);   /* Secondary dark background */
  background-color: var(--bg-tertiary);    /* Lighter dark background */
  background-color: var(--bg-glass);       /* Glass effect */
}

/* Text colors */
.my-text {
  color: var(--text-primary);    /* Main white text */
  color: var(--text-secondary);  /* Secondary gray text */
  color: var(--text-muted);      /* Muted gray text */
  color: var(--text-accent);     /* Orange accent text */
}

/* Border colors */
.my-border {
  border-color: var(--border-primary);   /* Main border */
  border-color: var(--border-secondary); /* Subtle border */
  border-color: var(--border-accent);    /* Orange accent border */
}

/* Gradients */
.my-gradient {
  background: var(--gradient-primary);   /* Orange to Yellow */
  background: var(--gradient-secondary); /* Dark gradient */
  background: var(--gradient-accent);    /* Purple to Orange */
}
```

### Tailwind CSS Classes
Use the custom utility classes provided:

```jsx
// Background classes
<div className="bg-theme-primary">Main background</div>
<div className="bg-theme-secondary">Secondary background</div>
<div className="bg-theme-tertiary">Tertiary background</div>
<div className="bg-theme-glass">Glass effect background</div>

// Text classes
<p className="text-theme-primary">Primary text</p>
<p className="text-theme-secondary">Secondary text</p>
<p className="text-theme-muted">Muted text</p>
<p className="text-theme-accent">Accent text</p>

// Border classes
<div className="border-theme-primary">Primary border</div>
<div className="border-theme-secondary">Secondary border</div>
<div className="border-theme-accent">Accent border</div>

// Gradient classes
<div className="gradient-primary">Primary gradient</div>
<div className="gradient-secondary">Secondary gradient</div>
<div className="gradient-accent">Accent gradient</div>
```

### JavaScript Theme Configuration
Import and use the theme configuration in your components:

```jsx
import theme from '../config/theme';

const MyComponent = () => {
  const primaryColor = theme.colors.primary[500];
  const gradientStyle = {
    background: theme.gradients.primary
  };

  return (
    <div style={gradientStyle}>
      <p style={{ color: primaryColor }}>Themed content</p>
    </div>
  );
};
```

## 🔧 Customizing Colors

### Method 1: Update CSS Variables (Quick Changes)
Edit `src/styles/globals.css` to change specific colors:

```css
:root {
  /* Change primary color from orange to blue */
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  
  /* Change accent color */
  --text-accent: #60a5fa;
}
```

### Method 2: Update Theme Configuration (Comprehensive Changes)
Edit `src/config/theme.js` for systematic changes:

```javascript
export const themeColors = {
  primary: {
    // Update entire primary palette
    500: '#3b82f6', // New blue primary
    600: '#2563eb',
    // ... other shades
  },
  // ... rest of configuration
};
```

## 📱 Mobile Menu Fix

The mobile menu has been fixed to slide from the right side instead of the top. The animation uses:

```css
/* Slides from right */
transform: translateX(100%); /* Hidden state */
transform: translateX(0);    /* Visible state */
```

## 🎯 Component Examples

### Button with Theme Colors
```jsx
import Button from '../components/UI/Button';

// Primary button (uses gradient-primary)
<Button variant="primary">Primary Action</Button>

// Secondary button (uses bg-theme-tertiary)
<Button variant="secondary">Secondary Action</Button>

// Outline button (uses border-theme-accent)
<Button variant="outline">Outline Action</Button>
```

### Card with Theme Colors
```jsx
import Card from '../components/UI/Card';

// Glass effect card
<Card variant="glass">Glass content</Card>

// Solid themed card
<Card variant="default">Default content</Card>

// Gradient card
<Card variant="gradient">Gradient content</Card>
```

## 🚀 Benefits

1. **Consistency**: All components use the same color system
2. **Easy Maintenance**: Change colors in one place, update everywhere
3. **Flexibility**: Multiple ways to apply theme colors
4. **Responsive**: Works seamlessly across mobile and desktop
5. **Performance**: CSS custom properties are efficient

## 🔄 Migration Guide

If you have existing components with hardcoded colors, replace them:

```jsx
// Before
<div className="bg-gray-800 text-white border-gray-700">

// After
<div className="bg-theme-secondary text-theme-primary border-theme-primary">
```

```css
/* Before */
.my-element {
  background-color: #1e293b;
  color: #ffffff;
}

/* After */
.my-element {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}
```

## 📋 Quick Reference

| Element | CSS Variable | Tailwind Class | Use Case |
|---------|-------------|----------------|----------|
| Main Background | `var(--bg-primary)` | `bg-theme-primary` | Page backgrounds |
| Card Background | `var(--bg-secondary)` | `bg-theme-secondary` | Card/panel backgrounds |
| Button Background | `var(--bg-tertiary)` | `bg-theme-tertiary` | Interactive elements |
| Primary Text | `var(--text-primary)` | `text-theme-primary` | Main content text |
| Secondary Text | `var(--text-secondary)` | `text-theme-secondary` | Supporting text |
| Accent Text | `var(--text-accent)` | `text-theme-accent` | Highlighted text |
| Primary Gradient | `var(--gradient-primary)` | `gradient-primary` | Buttons, CTAs |

The theme system is now fully integrated and the mobile menu slides correctly from the right side!
