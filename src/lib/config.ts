// export const AppConfig = {
//   apiUrl: 'http://172.25.0.114:8080/a7mangatur',
//   appKey: '',
//   appVersion: '1.0.0',
//   apiTimeout: 5000,
// };
export const AppConfig = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://172.25.0.114:8080',
  version: '1.0.0',
  company: import.meta.env.VITE_COMPANY || 'SSO',
  apiDB: import.meta.env.VITE_API_DB || 'dev-a7cmssso',
  appKey: import.meta.env.VITE_APP_KEY || 'bd0c956113ecb5dcb8b22d81b8932739b9fbf1e16beb69d42f46fe3fb359e36f',
  assetUrl: import.meta.env.VITE_ASSET_URL || '/a7mangatur',
};
