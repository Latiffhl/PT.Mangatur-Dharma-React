import Layout from '@/components/Layout';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fotoSatu from '../../assets/penghargaan3.png';
import fotoDua from '../../assets/penghargaan6.png';
import fotoTiga from '../../assets/penghargaan32.png';
import fotoEmpat from '../../assets/penghargaan62.png';
import { PrevArrow, NextArrow } from '@/components/CustomArrows';

// Komponen panah navigasi
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

// Pengaturan slider
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

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Penghargaan = () => {
  const carouselImages1 = [fotoSatu, fotoTiga];
  const carouselImages2 = [fotoDua, fotoEmpat];

  // Fungsi untuk render kartu
  const renderAwardCard = (awardNumber, imageUrl) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="h-64 rounded-lg overflow-hidden flex justify-center items-center">
        <img src={imageUrl} alt={`Penghargaan ${awardNumber}`} className="max-w-full max-h-full object-contain" />
      </div>
      <h3 className="font-bold text-2xl text-center">Detail Penghargaan {awardNumber}</h3>
      <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto esse ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );

  return (
    <Layout>
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-10 md:py-18">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-5xl font-bold z-50"> Our Category</h1>
          </div>
        </div>
        <div className="absolute inset-0">
          <img src="/assets/img/item/bg-1.png" alt="Modern office building" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="absolute bottom-0 right-12 mr-10 transform translate-x-1/4 translate-y-1/4">
          <img src="/assets/img/item/icon-6.png" alt="About Us" className="w-36 sm:w-36 md:w-48 object-contain" />
        </div>
      </div>

      <div className="bg-white p-8 my-7 shadow-[var(--shadow-card)]">
        <div className="flex items-center">
          <div className="bg-primary h-12 w-1 mr-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">Semua Penghargaan</h2>
          <div className="flex-grow border-t-4 border-gray-700 ml-4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-15 ">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Kartu Penghargaan Tunggal */}
          {renderAwardCard(1, '/assets/img/item/penghargaan1.png')}
          {renderAwardCard(2, '/assets/img/item/penghargaan2.png')}

          {/* Kartu Carousel 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Slider {...settings}>
                {carouselImages1.map((image, index) => (
                  <div key={index}>
                    <div className="flex justify-center items-center h-64 w-full">
                      <img src={image} alt={`Penghargaan 3, Gambar ${index + 1}`} className="w-full object-contain" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <h3 className="font-bold text-2xl text-center">Detail Penghargaan 3</h3>
            <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto esse ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* Kartu Penghargaan Tunggal */}
          {renderAwardCard(4, '/assets/img/item/penghargaan4.png')}
          {renderAwardCard(5, '/assets/img/item/penghargaan5.png')}

          {/* Kartu Carousel 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Slider {...settings}>
                {carouselImages2.map((image, index) => (
                  <div key={index}>
                    <div className="flex justify-center items-center h-64 w-full">
                      <img src={image} alt={`Penghargaan 6, Gambar ${index + 1}`} className="w-full object-contain" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <h3 className="font-bold text-2xl text-center">Detail Penghargaan 6</h3>
            <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae architecto esse ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* Kartu Penghargaan Tunggal */}
          {renderAwardCard(7, '/assets/img/item/penghargaan7.png')}
          {renderAwardCard(8, '/assets/img/item/penghargaan8.png')}
          {renderAwardCard(9, '/assets/img/item/penghargaan9.png')}
          {renderAwardCard(10, '/assets/img/item/penghargaan10.png')}
          {renderAwardCard(11, '/assets/img/item/penghargaan11.png')}
        </div>
      </div>
    </Layout>
  );
};

export default Penghargaan;
