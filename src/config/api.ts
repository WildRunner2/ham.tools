// API Configuration for SP3FCK Ham Tools
import { getCurrentConfig } from './environment';

// Get current environment URLs
const config = getCurrentConfig();

export const API_CONFIG = {
  // Main API base URL
  BASE_URL: `${config.BACKEND_URL}/api`,
    
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register'
    },
    PHOTOS: '/photos',
    IFRAME: {
      VIEWER: '/iframe/viewer'
    }
  },
  
  // Iframe viewer URL - this will be embedded in QRZ.com pages
  IFRAME_BASE_URL: `${config.IFRAME_DOMAIN}/iframe/viewer`
};

// Helper function for making API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const token = localStorage.getItem('authToken');
  if (token) {
    defaultOptions.headers = {
      ...defaultOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export default API_CONFIG;
