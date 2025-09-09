import Layout from '@/components/Layout';
import { useState } from 'react';

const Aktifitas = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-5xl font-bold z-50"> Berita & Aktifitas</h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <img src="/assets/img/item/bg-1.png" alt="Modern office building" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="absolute bottom-0 right-12 mr-10 transform translate-x-1/4 translate-y-1/4">
          <img src="/assets/img/item/icon-7.png" alt="About Us" className="w-36 sm:w-36 md:w-48 object-contain" />
        </div>
      </div>

      <div className=" p-8 my-7">
        <div className="flex items-center">
          <div className="bg-primary h-12 w-1 mr-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">Top News</h2>
          <div className="flex-grow border-t-4 border-gray-700 ml-4"></div>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-4 p-5">
        {/* Search bar */}
        <div className="flex-1 w-full">
          <input type="text" placeholder="Cari berita..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full border rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        {/* Dropdown Category */}
        <div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Category</option>
            <option value="event">Event</option>
            <option value="news">News</option>
            <option value="announcement">Announcement</option>
          </select>
        </div>
      </div>
    </Layout>
  );
};
export default Aktifitas;
