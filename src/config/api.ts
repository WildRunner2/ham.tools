// API Configuration for SP3FCK Ham Tools
export const API_CONFIG = {
  BASE_URL: 'https://sp3fck-ham-tools-api.hamtools.workers.dev/api',
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
  IFRAME_BASE_URL: 'https://sp3fck-ham-tools-api.hamtools.workers.dev/api/iframe/viewer'
};

// Helper function for making API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = ${API_CONFIG.BASE_URL};
  
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
      Authorization: Bearer ,
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
