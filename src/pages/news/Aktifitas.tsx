import Layout from '@/components/Layout';

const Aktifitas = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Aktifitas</h1>
            <div className="w-24 h-24 bg-orange-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)] text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Halaman dalam pengembangan</h2>
          <p className="text-gray-600">Konten aktifitas akan segera tersedia.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Aktifitas;