// Environment Configuration
// Update these URLs when you deploy your backend

export const APP_CONFIG = {
  // Your main website domain (where this React app will be hosted)
  FRONTEND_URL: 'https://wildrunner2.github.io/ham.tools',
  
  // Your backend API domain (update when you deploy your API)
  BACKEND_URL: 'https://api.sp3fck-hamtools.com',
  
  // Your iframe viewer domain (update when you deploy iframe viewer)
  IFRAME_DOMAIN: 'https://sp3fck-hamtools.com',
  
  // Local development URLs (for future development)
  DEV: {
    FRONTEND_URL: 'http://localhost:3000',
    BACKEND_URL: 'http://localhost:3001',
    IFRAME_DOMAIN: 'http://localhost:3001'
  }
};

// Environment detection helper
export const isDevelopment = () => {
  return window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1' ||
         window.location.hostname.includes('localhost');
};

// Get current environment URLs
export const getCurrentConfig = () => {
  return isDevelopment() ? APP_CONFIG.DEV : APP_CONFIG;
};

export default APP_CONFIG;
