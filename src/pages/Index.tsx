import Layout from '@/components/Layout';
import React from 'react';
// untuk carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImage1 from '../assets/md1.png';
import heroImage2 from '../assets/md2.png';
import heroImage3 from '../assets/md3.png';

type PrevAarrow = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer 
               bg-gray-800 bg-opacity-50 text-white rounded-full p-2 
               hover:bg-opacity-75 transition-all"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer 
               bg-gray-800 bg-opacity-50 text-white rounded-full p-2 
               hover:bg-opacity-75 transition-all"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Index = () => {
  const carouselImages = [heroImage1, heroImage2, heroImage3];

  return (
    <Layout>
      {/* Hero Sliders */}
      <section className="relative bg-gradient-to-r from-white to-white text-white py-0 px-0 overflow-hidden">
        <div className="relative">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Industrial filter product ${index + 1}`} className="w-full h-auto shadow-2xl object-cover" style={{ maxHeight: '500px' }} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="container text-center mx-auto px-4 py-6 md:py-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Kami menyediakan solusi komprehensif untuk semua kebutuhan filter Anda di berbagai industri. Baik Anda berada di sektor pertambangan, konstruksi, transportasi, pembangkit listrik, atau manufaktur, kami memiliki filter
              berkualitas tinggi yang memastikan kinerja optimal mesin dan peralatan Anda. Produk kami dibuat dengan standar internasional yang ketat, menggunakan bahan terbaik dan teknologi terdepan untuk memastikan ketahanan, efisiensi,
              dan keandalan yang luar biasa. Dengan produk berkualitas tinggi, manfaat dari filter terkualitas tinggi yang kami tawarkan, mulai dari filter berkualitas tinggi, memastikan efektivitas harga. Apapun industrinya, kami
              menyediakan solusi filter yang tepat untuk Anda dengan kualitas terbaik yang terjangkau.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className=" py-10 bg-background bg-gradient-to-t from-[#8EE2FF] via-[#ffffff] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Automotive */}
            <div className="text-center bg-white p-6 rounded-lg shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/assets/img/item/Automotive.png" alt="Automotive Icon" className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Automotive</h3>
              <p className="text-sm text-gray-600">Fuel Filter, Air Filter, Oil Filter</p>
            </div>

            {/* Heavy Duty */}
            <div className="text-center bg-white p-6 rounded-lg shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/assets/img/item/HeavyDuty.png" alt="Heavy Duty Icon" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Heavy Duty</h3>
              <p className="text-sm text-gray-600">Mining, Construction, Agriculture Filters</p>
            </div>

            {/* Industrial */}
            <div className="text-center bg-white p-6 rounded-lg shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/assets/img/item/Industrial.png" alt="Industrial Icon" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Industrial</h3>
              <p className="text-sm text-gray-600">Manufacturing, Power Plant, Compressor</p>
            </div>

            {/* HVAC */}
            <div className="text-center bg-white p-6 rounded-lg shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/assets/img/item/HVAC.png" alt="HVAC Icon" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">HVAC</h3>
              <p className="text-sm text-gray-600">Hospital, Pharmacy, Food & Beverage, Building</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
