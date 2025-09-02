import Layout from '@/components/Layout';

const JejadLangkah = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Jejak Langkah</h1>
            <div className="w-24 h-24 bg-orange-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-orange-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-[var(--shadow-card)] overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary">Roadmap</h2>
              <h3 className="text-2xl font-bold text-gray-600">Timeline Process</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Path */}
              <div className="absolute left-8 top-0 w-1 h-full bg-gray-300"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    1976
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold text-primary">Established</h4>
                    <p className="text-gray-600">Company founded</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    1984
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold text-primary">Start to Sales</h4>
                    <p className="text-gray-600">GTS Donaldson Filters (Import)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    1988
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold text-primary">Joint With ADR</h4>
                    <p className="text-gray-600">Groups of Company</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    2000
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold text-primary">Support from</h4>
                    <p className="text-gray-600">Donaldson Filtration Indonesia to supply filters</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    2004
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold text-primary">Sole Agent PT</h4>
                    <p className="text-gray-600">Panata Jaya Mandiri For GTS & Filter</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    2021
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold text-primary">Sole Agent PT</h4>
                    <p className="text-gray-600">Selamat Sempurna For GTS & HVAC & Filter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JejadLangkah;