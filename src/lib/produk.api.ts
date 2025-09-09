/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchingApi } from './catalog-api';
import { AppConfig } from './config';

export async function getListProduk(): Promise<any[]> {
  const objParams = {
    params: {
      Method: 'LoadGrid',
      Controller: 'CMPROD',
      ApiDB: apiDB,
    },
  };

  try {
    const response = await fetchingApi(`${AppConfig.apiUrl}/getData`, objParams);
    return response?.data?.items || [];
  } catch (error) {
    console.error('Gagal mengambil data produk:', error);
    return [];
  }
}
