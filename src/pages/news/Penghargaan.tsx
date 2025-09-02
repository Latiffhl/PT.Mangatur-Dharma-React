import Layout from '@/components/Layout';

const Penghargaan = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Penghargaan</h1>
            <div className="w-24 h-24 bg-orange-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)] text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Halaman dalam pengembangan</h2>
          <p className="text-gray-600">Konten penghargaan akan segera tersedia.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Penghargaan;