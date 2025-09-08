import React, { useState } from 'react';
import Layout from '@/components/Layout';
// untuk carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImage1 from '../assets/md1.png';
import heroImage2 from '../assets/md2.png';
import heroImage3 from '../assets/md3.png';

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

const Test = () => {
  // State untuk melacak indeks slide yang sedang aktif
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [heroImage1, heroImage2, heroImage3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // Perbarui state setiap kali slide berubah
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Contoh data untuk setiap slide
  const sectionContent = [
    {
      title: 'Judul Bagian 1',
      description: 'Deskripsi singkat untuk slide pertama. Konten ini berubah seiring pergeseran gambar.',
    },
    {
      title: 'Judul Bagian 2',
      description: 'Ini adalah konten yang relevan dengan slide kedua. Informasi akan diperbarui secara dinamis.',
    },
    {
      title: 'Judul Bagian 3',
      description: 'Teks untuk slide ketiga. Menampilkan detail baru saat gambar berubah.',
    },
  ];

  return (
    <Layout>
      {/* Hero Sliders */}
      <section className="relative bg-gradient-to-r from-white to-white text-white py-0 px-0 overflow-hidden">
        <div className="relative ">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Industrial filter product ${index + 1}`} className="w-full h-auto shadow-2xl object-cover " style={{ maxHeight: '220px' }} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Bagian konten yang berubah */}
      <section className="py-12 bg-gray-100 text-center">
        <div className="container mx-auto">
          {/* Tampilkan konten berdasarkan indeks slide yang aktif */}
          <h2 className="text-3xl font-bold mb-4">{sectionContent[currentSlide].title}</h2>
          <p className="text-lg text-gray-700">{sectionContent[currentSlide].description}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Test;
