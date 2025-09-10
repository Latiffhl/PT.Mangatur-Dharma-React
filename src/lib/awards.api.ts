// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { fetchingApi } from './catalog-api';
// import { AppConfig } from './config';

// export async function getListAwards(apiDB: string): Promise<any[]> {
//   const objParams = {
//     params: {
//       Method: 'LoadGrid',
//       Controller: 'CMAWRH',
//       ApiDB: apiDB,
//     },
//   };

//   try {
//     const response = await fetchingApi(`${AppConfig.apiUrl}/getData`, objParams);
//     if (response?.data?.items) {
//       return response.data.items;
//     }
//   } catch (error) {
//     console.error('Gagal mengambil data penghargaan:', error);
//     return [];
//   }
//   return [];
// }
import React, { useEffect } from 'react';
import { getListEvents } from './lib/event.api'; // Sesuaikan jalur

const ApiTester = () => {
  useEffect(() => {
    const testApi = async () => {
      console.log('Menguji koneksi API...');
      try {
        const data = await getListEvents(1, 1, 'news');
        console.log('Koneksi API berhasil! Data:', data);
      } catch (error) {
        console.error('Koneksi API gagal:', error);
      }
    };
    testApi();
  }, []);
  return <div>Lihat konsol browser untuk hasilnya.</div>;
};

export default ApiTester;
