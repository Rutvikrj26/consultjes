# JES Engineering - Industrial Procurement Services

A modern, sleek, and elegant React-based procurement and installation services website for industrial components.

## Live Site

Visit http://localhost:5173/ to view the site (development server must be running)

## Design Features

### Visual Style
- **Sleek & Sharp Design**: Modern gradient backgrounds, glass-morphism effects, and smooth animations
- **Elegant Typography**: Montserrat for headings, Inter for body text
- **Sophisticated Color Palette**: Navy blue (#1B3A52, #0A1929) with gold accents (#D4AF37, #F4D03F)
- **Smooth Interactions**: Hover effects, transitions, and micro-animations throughout

### Pages Implemented

#### 1. **Homepage** (`/`)
   - **Hero Section**: Transparent header merging with gradient background featuring peacock logo
   - **Product Categories**: Three main categories with hover effects
   - **Value Proposition**: Four key differentiators
   - **Call to Action**: Quote request and browse products

#### 2. **Products Page** (`/products`)
   - **Search Functionality**: Real-time product search
   - **Category Filters**: Browse by main categories and subcategories
   - **Product Grid**: All products from JSON data with:
     - Category badges
     - Technical tier indicators
     - Specifications preview
     - Quote request buttons
   - **Responsive Sidebar**: Sticky filters on desktop, collapsible on mobile
   - **Dynamic Product Count**: Shows filtered results

#### 3. **About & Contact Page** (`/about`)
   - **Company Overview**: Mission and values
   - **Services Grid**: 6 procurement and installation services
   - **Contact Information**: Email, phone, location
   - **Quote Request Form**: Category-based inquiry form
   - **Stats Cards**: Quality assurance, global network, expertise, customer focus

### Components & Features

- **Modular Design**: Reusable Button and Card components
- **Design System**: Consistent theme in `src/constants/theme.js`
- **Routing**: React Router for seamless navigation
- **Data Integration**: All 13 JSON product files integrated
- **Responsive**: Mobile-first design with breakpoints

### Design System

Located in `src/constants/theme.js`:
- Color palette with semantic naming
- Typography scale and font families
- Spacing system
- Border radius values
- Shadow variants (including colored shadows)
- Transition timing functions
- Responsive breakpoints
- Z-index layers

### Reusable Components

- **Button**: Multiple variants (primary, secondary, outline, ghost) with sizes
- **Card**: Various styles (default, elevated, outlined, glass) with hover effects
- **Header**: Fixed navigation with scroll effects
- All components are fully responsive

## Getting Started

### Development Server

```bash
npm run dev
```

Visit http://localhost:5173/ to view the site

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Next Steps for Iterations

### Design Iterations
1. **Color Adjustments**: Tweak navy/gold shades for different moods
2. **Typography**: Experiment with different font pairings
3. **Spacing**: Adjust section padding and component gaps
4. **Animations**: Add more sophisticated micro-interactions
5. **Hero Variants**: Try different hero layouts (video background, split screen, etc.)

### Feature Additions
1. **Product Integration**: Connect to JSON product data
2. **Search & Filter**: Add product search and category filtering
3. **Quote Form**: Implement contact/quote request functionality
4. **Product Detail Pages**: Create detailed product view pages
5. **Resources Section**: Add downloadable catalogs and documentation

### Performance Optimization
1. **Lazy Loading**: Implement code splitting for better performance
2. **Image Optimization**: Add optimized product images
3. **SEO**: Add meta tags and structured data
4. **Accessibility**: Ensure WCAG compliance

## Technology Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Modern styling with Grid & Flexbox
- **Google Fonts**: Montserrat, Inter, Roboto Mono

## Project Structure

```
procurement-site/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx/css   # Navigation with routing
│   │   ├── Hero.jsx/css     # Homepage hero with peacock logo
│   │   ├── ProductCategories.jsx/css
│   │   ├── ValueProposition.jsx/css
│   │   ├── CallToAction.jsx/css
│   │   ├── Footer.jsx/css
│   │   ├── Button.jsx/css   # Reusable button component
│   │   └── Card.jsx/css     # Reusable card component
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Homepage (/)
│   │   ├── Products.jsx/css # Product listing (/products)
│   │   └── About.jsx/css    # About & contact (/about)
│   ├── data/                # JSON product data (13 files)
│   │   ├── pumps.json
│   │   ├── motors.json
│   │   ├── valves.json
│   │   ├── linear-bearings-guideways.json
│   │   ├── shafts-ballscrews-supports.json
│   │   ├── bushings-specialized-bearings.json
│   │   ├── sensors-accessories.json
│   │   ├── mobile-hydraulics-linear-motion.json
│   │   ├── ancillary-material-handling.json
│   │   ├── air-cooled-chillers.json
│   │   ├── water-cooled-chillers.json
│   │   ├── specialized-chillers.json
│   │   └── cooling-tunnels.json
│   ├── utils/               # Utility functions
│   │   └── productData.js   # Product data loader & search
│   ├── constants/           # Design system & theme
│   │   └── theme.js
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── App.jsx              # Router configuration
│   └── main.jsx             # Application entry point
├── package.json
└── README.md
```

## Design Philosophy

The site balances **professional engineering aesthetics** with **modern web design**:

- **Trust & Quality**: Navy colors convey professionalism and reliability
- **Premium Feel**: Gold accents suggest excellence and quality
- **Modern & Clean**: Ample whitespace and clear hierarchy
- **Performance**: Smooth animations without sacrificing speed
- **Accessible**: High contrast ratios and semantic HTML

## Feedback & Iteration

This is the first iteration of the homepage. Please review:
- Overall visual style and feel
- Color scheme appropriateness
- Typography readability
- Component layout and spacing
- Animation smoothness
- Mobile responsiveness

Any feedback will be incorporated into the next design iteration!
