import Layout from '@/components/Layout';

const TentangPerusahaan = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Tentang Perusahaan</h1>
            <div className="w-24 h-24 bg-orange-accent/20 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)]">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>PT Mangatur Dharma</strong> (selanjutnya disebut Perseroan) berdiri tahun 1976 bermula dari perdagangan filter GTS (Gas Turbine System) 
              Genep merek Donaldson.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Pada tahun 1988 bergabung dengan ADR Group of Companies dan mengembangkan sayapnya tidak hanya pada filter GTS tetapi filter 
              filter jenis lain untuk Alat Berat Pertambangan, Jasa Konstruksi, Perkapalan, Pembangkit Listrik, Transportasi, HVAC serta filter untuk 
              kebutuhan industri.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Pada tahun 2024 PT Dapat Tunggal Cipta, Entitas Anak PT Selamat Sempurna Tbk. menjadi pemegang saham utama Perseroan.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Berlokasi di Jakarta dan Tangerang, Perseroan menjadi pemasok terpercaya ke berbagai Perusahaan Pembangkit Listrik, 
              Pertambangan, Jasa Konstruksi, Transportasi, Rumah sakit, Farmasi serta Minyak & Gas baik swasta maupun BUMN di seluruh 
              Indonesia.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TentangPerusahaan;