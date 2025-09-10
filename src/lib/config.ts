export const AppConfig = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5001',
  version: '1.0.0',
  company: import.meta.env.VITE_COMPANY || 'SSO',
  apiDB: import.meta.env.VITE_API_DB || 'dev-a7cmssso',
  appKey: import.meta.env.VITE_APP_KEY || 'bd0c956113ecb5dcb8b22d81b8932739b9fbf1e16beb69d42f46fe3fb359e36f',
  assetUrl: import.meta.env.VITE_ASSET_URL || '/sso_website',
};
