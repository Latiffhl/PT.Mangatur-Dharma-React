import Layout from '@/components/Layout';

const Kontak = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Kontak</h1>
            <div className="w-24 h-24 bg-orange-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Sales Person */}
          <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-primary mb-6">Sales Person</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800">Bidang Marine dan Transportasi</h3>
                <p className="text-gray-600">Syah R Luzeka</p>
                <p className="text-gray-600">+62 812 8656 8092</p>
                <p className="text-primary">syahrul.luzeka@adr-group.co.id</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800">Bidang Mining dan Power Plant</h3>
                <p className="text-gray-600">Guest Yudha nti W1 Yudha</p>
                <p className="text-gray-600">+62 812 3456 7890</p>
                <p className="text-primary">guest.yudha@adr-group.co.id</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800">Bidang GTS, Oil & Gas</h3>
                <p className="text-gray-600">Andre Rigstyanto</p>
                <p className="text-gray-600">+62 812 3456 7890</p>
                <p className="text-primary">andre.rigstyanto@adr-group.co.id</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800">Bidang HVAC</h3>
                <p className="text-gray-600">David Lelisa Alpicar</p>
                <p className="text-gray-600">+62 812 8565 8081</p>
                <p className="text-primary">david.lelisa@adr-group.co.id</p>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-primary">mangatur@adr-group.com</p>
                <p className="text-gray-600">@mangaturdharma</p>
                <p className="text-primary font-semibold">PT Mangatur Dharma</p>
              </div>
            </div>
          </div>

          {/* Alamat */}
          <div className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-primary mb-6">Alamat</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">PT Mangatur Dharma - Jakarta</h3>
                <p className="text-gray-600">Wisma ADR, Jl Pudi Raya No. 1,</p>
                <p className="text-gray-600">Penggilingan, Jakarta Utara 14440,</p>
                <p className="text-gray-600">Indonesia</p>
                <p className="text-gray-600 mt-2">Telp: 021 - 598 7227 / 598 7235</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">PT Mangatur Dharma - Tangerang</h3>
                <p className="text-gray-600">Kompleks Industri Jl BSD City</p>
                <p className="text-gray-600">Jl. Raya LPPU Curug No. 88,</p>
                <p className="text-gray-600">Desa Cikuya, Bitung, Tangerang 15810</p>
                <p className="text-gray-600 mt-2">Telp: 021 - 598 7227 / 598 7235</p>
              </div>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-primary mb-4">MD Jakarta - Pusat</h3>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Jakarta Location</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-primary mb-4">MD Tangerang</h3>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Tangerang Location</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontak;