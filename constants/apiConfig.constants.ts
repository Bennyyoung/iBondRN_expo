const apiConfig = {
  development: {
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
  },
  staging: {
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
  },
  production: {
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
  },
};

export const baseUrl = apiConfig[process.env.EXPO_PUBLIC_ENVIRONMENT as keyof typeof apiConfig]?.baseUrl;
