/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchingApi } from './catalog-api';
import { AppConfig } from './lib/config.ts';
export async function getListAwards(): Promise<any[]> {
  const objParams = {
    params: {
      Method: 'LoadGrid',
      Controller: 'PENGHARGAAN', // Nama tabel yang Anda sebutkan
      ApiDB: AppConfig.apiDB,
    },
  };

  try {
    const response = await fetchingApi(`${AppConfig.apiUrl}/getData`, objParams);
    if (response?.data?.items) {
      return response.data.items;
    }
  } catch (error) {
    console.error('Gagal mengambil data penghargaan:', error);
    return [];
  }
  return [];
}
