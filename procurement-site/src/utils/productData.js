// Import all product JSON files
import pumpsData from '../data/pumps.json';
import motorsData from '../data/motors.json';
import valvesData from '../data/valves.json';
import linearBearingsData from '../data/linear-bearings-guideways.json';
import shaftsBallscrewsData from '../data/shafts-ballscrews-supports.json';
import bushingsData from '../data/bushings-specialized-bearings.json';
import sensorsData from '../data/sensors-accessories.json';
import mobileHydraulicsData from '../data/mobile-hydraulics-linear-motion.json';
import ancillaryData from '../data/ancillary-material-handling.json';
import airCooledChillersData from '../data/air-cooled-chillers.json';
import waterCooledChillersData from '../data/water-cooled-chillers.json';
import specializedChillersData from '../data/specialized-chillers.json';
import coolingTunnelsData from '../data/cooling-tunnels.json';

// Category groupings for the main categories
export const categoryGroups = {
  hydraulics: {
    name: 'Hydraulic Systems',
    icon: '⚙️',
    description: 'High-performance pumps, motors, and valves for demanding applications',
    subcategories: ['Pumps', 'Motors', 'Valves', 'Mobile Hydraulics & Linear Motion']
  },
  linearMotion: {
    name: 'Linear Motion',
    icon: '🔧',
    description: 'Precision bearings, guideways, and ball screws for accurate movement',
    subcategories: ['Linear Bearings & Guideways', 'Shafts, Ballscrews & Supports', 'Bushings & Specialized Bearings', 'Sensors & Accessories']
  },
  cooling: {
    name: 'Cooling Solutions',
    icon: '❄️',
    description: 'Industrial chillers and cooling systems for optimal temperature control',
    subcategories: ['Air-Cooled Chillers', 'Water-Cooled Chillers', 'Specialized Chillers', 'Cooling Tunnels']
  },
  ancillary: {
    name: 'Ancillary Equipment',
    icon: '📦',
    description: 'Supporting equipment and material handling solutions',
    subcategories: ['Ancillary & Material Handling']
  }
};

// Organize all product data by category
export const productsByCategory = {
  'Pumps': pumpsData,
  'Motors': motorsData,
  'Valves': valvesData,
  'Linear Bearings & Guideways': linearBearingsData,
  'Shafts, Ballscrews & Supports': shaftsBallscrewsData,
  'Bushings & Specialized Bearings': bushingsData,
  'Sensors & Accessories': sensorsData,
  'Mobile Hydraulics & Linear Motion': mobileHydraulicsData,
  'Ancillary & Material Handling': ancillaryData,
  'Air-Cooled Chillers': airCooledChillersData,
  'Water-Cooled Chillers': waterCooledChillersData,
  'Specialized Chillers': specializedChillersData,
  'Cooling Tunnels': coolingTunnelsData,
};

// Get all products as a flat array
export const getAllProducts = () => {
  const allProducts = [];

  Object.entries(productsByCategory).forEach(([categoryName, categoryData]) => {
    if (categoryData.subcategories) {
      categoryData.subcategories.forEach(subcategory => {
        if (subcategory.products) {
          subcategory.products.forEach(product => {
            allProducts.push({
              ...product,
              category: categoryName,
              subcategory: subcategory.name
            });
          });
        }
      });
    }
  });

  return allProducts;
};

// Get products by main category group
export const getProductsByGroup = (groupKey) => {
  const group = categoryGroups[groupKey];
  if (!group) return [];

  const products = [];
  group.subcategories.forEach(subcategoryName => {
    const categoryData = productsByCategory[subcategoryName];
    if (categoryData && categoryData.subcategories) {
      categoryData.subcategories.forEach(subcategory => {
        if (subcategory.products) {
          subcategory.products.forEach(product => {
            products.push({
              ...product,
              category: subcategoryName,
              subcategory: subcategory.name
            });
          });
        }
      });
    }
  });

  return products;
};

// Search products
export const searchProducts = (query) => {
  const allProducts = getAllProducts();
  const lowerQuery = query.toLowerCase();

  return allProducts.filter(product =>
    product.name?.toLowerCase().includes(lowerQuery) ||
    product.description?.toLowerCase().includes(lowerQuery) ||
    product.applications?.toLowerCase().includes(lowerQuery) ||
    product.category?.toLowerCase().includes(lowerQuery)
  );
};
