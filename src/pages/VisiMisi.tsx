import Layout from '@/components/Layout';

const VisiMisi = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Visi & Misi</h1>
            <div className="w-24 h-24 bg-orange-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-primary mb-6">Visi</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Menjadi perusahaan terbaik di Indonesia untuk pengadaan komponen industri dan alat berat lainnya
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-primary mb-6">Misi</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Menjadi perusahaan pertama yang menyediakan solusi untuk kebutuhan Industri (Power Plan, Oil & Gas, Otomotif, 
              Mining, Marine, HVAC) dengan menyediakan Produk berkualitas, harga yg terjangkau serta area distribusi yang luas & 
              terpercaya.
            </p>
          </div>
        </div>

        {/* Nilai Inti */}
        <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)] mt-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Nilai Inti Perseroan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center font-bold">1</div>
                <p className="text-gray-700">Berkembang bersama stakeholders</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center font-bold">2</div>
                <p className="text-gray-700">Berjuang menjadi yang terbaik</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center font-bold">3</div>
                <p className="text-gray-700">Saling menghargai sebagai anggota tim</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full text-white text-sm flex items-center justify-center font-bold">4</div>
                <p className="text-gray-700">Tanggap terhadap perubahan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisiMisi;