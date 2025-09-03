import Layout from '@/components/Layout';

const JejakLangkah = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold z-50"> Jejak & Langkah</h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <img src="\assets\img\item\bg-1.png" alt="Modern office building" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="absolute bottom-0 right-12 mr-10 transform translate-x-1/4 translate-y-1/4">
          <img src="\assets\img\item\icon-3.png" alt="About Us" className="w-48 h-48 object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-[var(--shadow-card)] overflow-hidden relative">
          {' '}
          {/* Tambahkan 'relative' di sini */}
          {/* Gambar PNG akan menjadi latar belakang atau mengisi area utama */}
          <img src="public\assets\img\item\jejak-langkah.png" alt="Company Roadmap Timeline" className="w-full h-auto object-cover" /* Sesuaikan h-auto jika gambar memiliki rasio aspek yang tinggi */ />
          {/* Teks "Roadmap" dan "Timeline Process" di kanan bawah gambar */}
          <div className="absolute bottom-0 right-0 p-8 text-right bg-white bg-opacity-70 rounded-tl-lg">
            {' '}
            {/* Tambahkan styling untuk kontras */}
            <h2 className="text-3xl font-bold text-primary mb-2">Roadmap</h2>
            <h3 className="text-2xl font-bold text-gray-600">Timeline Process</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JejakLangkah;
