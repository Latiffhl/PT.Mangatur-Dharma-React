import Layout from '@/components/Layout';

const DaftarPelanggan = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Daftar Pelanggan</h1>
            <div className="w-24 h-24 bg-orange-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A3.001 3.001 0 0 0 17.5 7.5c-.83 0-1.58.34-2.12.89L14 10H8.5l-1.26-1.43A.998.998 0 0 0 6.5 8H3.5l1.5 1.5v11C5 21.32 5.68 22 6.5 22h1c.82 0 1.5-.68 1.5-1.5v-6c0-.82-.68-1.5-1.5-1.5H6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1.5c.82 0 1.5.68 1.5 1.5v6c0 .82.68 1.5 1.5 1.5h10z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)] text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Halaman dalam pengembangan</h2>
          <p className="text-gray-600">Daftar pelanggan akan segera tersedia.</p>
        </div>
      </div>
    </Layout>
  );
};

export default DaftarPelanggan;