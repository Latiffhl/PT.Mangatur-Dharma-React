import Layout from '@/components/Layout';

const OurCategory = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-5xl font-bold z-50"> Our Category</h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <img src="\assets\img\item\bg-1.png" alt="Modern office building" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="absolute bottom-0 right-12 mr-10 transform translate-x-1/4 translate-y-1/4">
          <img src="\assets\img\item\icon-5.png" alt="About Us" className="w-48 h-48 object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-15 ">
        {/* Category Section */}
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-shadow">
            <div className="h-64 rounded-lg overflow-hidden flex justify-center items-center">
              <img src="placeholder.svg" alt="" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="font-bold text-2xl text-center">Automotive</h3>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto esse ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem debitis velit sed architecto quisquam dolor molestiae voluptas doloribus
              similique.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-shadow">
            <div className="h-64 rounded-lg overflow-hidden flex justify-center items-center">
              <img src="placeholder.svg" alt="" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="font-bold text-2xl text-center">Heavy Duty</h3>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto esse ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem debitis velit sed architecto quisquam dolor molestiae voluptas doloribus
              similique.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-shadow">
            <div className="h-64 rounded-lg overflow-hidden flex justify-center items-center">
              <img src="placeholder.svg" alt="" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="font-bold text-2xl text-center">Industrial</h3>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto esse ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem debitis velit sed architecto quisquam dolor molestiae voluptas doloribus
              similique.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-shadow">
            <div className="h-64 rounded-lg overflow-hidden flex justify-center items-center">
              <img src="placeholder.svg" alt="" className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="font-bold text-2xl text-center">HVAC</h3>
            <p className="text-center mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto esse ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem debitis velit sed architecto quisquam dolor molestiae voluptas doloribus
              similique.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OurCategory;
