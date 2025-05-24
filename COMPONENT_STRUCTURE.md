# The Blessing Asia - Component Structure

## Overview
This project has been restructured into modular, reusable components that work seamlessly across mobile and web views. The component architecture follows modern React best practices with responsive design principles.

## Component Architecture

### 📱 Responsive Design
- **Mobile-first approach** with Tailwind CSS breakpoints
- **Custom responsive hook** (`useResponsive.js`) for dynamic behavior
- **Adaptive layouts** that work on all screen sizes
- **Touch-friendly interactions** for mobile devices

### 🏗️ Layout Components

#### `src/components/Layout/`
- **Header.js** - Main navigation with mobile hamburger menu
- **MobileMenu.js** - Slide-out mobile navigation panel
- **Container.js** - Responsive container with configurable sizes and padding

#### `src/components/UI/`
- **Button.js** - Reusable button with multiple variants and sizes
- **Card.js** - Flexible card component with glass morphism effects

### 📄 Section Components

#### `src/components/Sections/`
- **HeroSection.js** - Main landing area with responsive trophy and titles
- **SpeakersSection.js** - Speaker showcase with placeholder content
- **TicketsSection.js** - Ticket pricing with interactive cards
- **SchedulesSection.js** - Day-by-day schedule with tab navigation
- **MasterclassSection.js** - Workshop details with registration
- **FAQSection.js** - Expandable FAQ with smooth animations

### 🔧 Utilities

#### `src/hooks/`
- **useResponsive.js** - Custom hook for responsive behavior detection

## Features Implemented

### ✅ Mobile Responsiveness
- Hamburger menu for mobile navigation
- Responsive typography and spacing
- Touch-friendly button sizes
- Optimized layouts for small screens

### ✅ Interactive Elements
- Smooth scrolling navigation
- Expandable FAQ sections
- Day selector for schedules
- Hover effects and animations

### ✅ Modern Design
- Glass morphism effects
- Gradient backgrounds
- Consistent color scheme (orange/amber theme)
- Professional typography

### ✅ Accessibility
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus management

## Usage Examples

### Basic Component Usage
```jsx
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

// Button variants
<Button variant="primary" size="lg">Primary Button</Button>
<Button variant="outline" size="md">Outline Button</Button>

// Card variants
<Card variant="glass" padding="lg">Content here</Card>
<Card variant="gradient">Content here</Card>
```

### Responsive Hook Usage
```jsx
import useResponsive from '../hooks/useResponsive';

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <div className={isMobile ? 'text-sm' : 'text-lg'}>
      Responsive content
    </div>
  );
};
```

## File Structure
```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.js
│   │   ├── MobileMenu.js
│   │   └── Container.js
│   ├── Sections/
│   │   ├── HeroSection.js
│   │   ├── SpeakersSection.js
│   │   ├── TicketsSection.js
│   │   ├── SchedulesSection.js
│   │   ├── MasterclassSection.js
│   │   └── FAQSection.js
│   ├── UI/
│   │   ├── Button.js
│   │   └── Card.js
│   └── Header.js (Main landing component)
├── hooks/
│   └── useResponsive.js
└── pages/
    └── index.js
```

## Customization

### Adding New Sections
1. Create new component in `src/components/Sections/`
2. Import and add to `Header.js` main component
3. Add navigation item to Header navigation array

### Styling Customization
- All components use Tailwind CSS classes
- Consistent color scheme with CSS custom properties
- Easy to modify through Tailwind configuration

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Next Steps
1. Add real content and images
2. Implement registration/ticket purchase functionality
3. Add speaker photos and detailed information
4. Integrate with backend API for dynamic content
5. Add SEO optimization
6. Implement analytics tracking

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
```

The application is now running at http://localhost:3001 with full mobile and desktop responsiveness!
