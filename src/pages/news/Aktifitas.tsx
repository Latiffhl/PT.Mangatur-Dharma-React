import Layout from '@/components/Layout';

const Aktifitas = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-5xl font-bold z-50"> Beritas & Aktifitas</h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <img src="/assets/img/item/bg-1.png" alt="Modern office building" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="absolute bottom-0 right-12 mr-10 transform translate-x-1/4 translate-y-1/4">
          <img src="/assets/img/item/icon-7.png" alt="About Us" className="w-36 sm:w-36 md:w-48 object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Cari berita..." className="focus:outline-none flex-grow" />
          </div>
          <div className="relative w-full md:w-auto">
            <select className="appearance-none border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none">
              <option>Category</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Aktifitas;
