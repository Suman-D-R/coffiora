import { IconCoffee, IconTruck, IconMenu2 } from '@tabler/icons-react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

const products = [
  {
    id: 1,
    name: 'Filter Coffee Power',
    description: 'Smooth Nutty Taest | 150G',
    price: 400,
    image: '/file-text.svg', // Replace with actual product image if available
    reviews: 25,
    rating: 5,
  },
  {
    id: 2,
    name: 'Filter Coffee Power',
    description: 'Smooth Nutty Taest | 150G',
    price: 400,
    image: '/file-text.svg',
    reviews: 25,
    rating: 5,
  },
  {
    id: 3,
    name: 'Filter Coffee Power',
    description: 'Smooth Nutty Taest | 150G',
    price: 400,
    image: '/file-text.svg',
    reviews: 25,
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className='min-h-dvh  transition-colors duration-300'>
      <Header />

      <div className='absolute inset-0 w-full h-dvh top-0  left-0 -z-10'>
        {/* Gradient mask for smooth transition */}
        <div className='absolute inset-0 w-full h-dvh top-0 left-0 z-20 bg-gradient-to-b from-transparent via-transparent to-quaternary'></div>
        <div className='absolute inset-0 w-full h-dvh top-0  left-0 z-10 bg-tertiary/60'></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src='/videos/bg-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Hero Section */}
      <section className='relative min-h-dvh flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-20 max-w-7xl mx-auto overflow-hidden'>
        {/* Background Video */}

        {/* Left */}
        <div className='flex-1 z-10 text-center md:text-left'>
          {/* <div className='inline-flex items-center gap-3 bg-primary text-secondary px-6 py-3 rounded-full font-medium mb-8 text-lg'>
            <IconCoffee size={24} /> Premium Coorg Coffee
          </div> */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 font-sans leading-tight'>
            Experience The <span className='text-quinary'>Perfect Brew</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-secondary mb-6 md:mb-8 max-w-lg mx-auto md:mx-0'>
            Handcrafted with passion, our coffee beans are sourced from coorg
            farms and roasted to perfection
          </p>
          <div className='flex gap-4 sm:gap-6 mb-8 md:mb-10'>
            <button className='flex items-center justify-center gap-2 sm:gap-3 bg-primary text-secondary font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-[#a05e16] transition text-base sm:text-lg'>
              Export Menu
            </button>
            <button className='border border-primary backdrop-blur-sm text-secondary font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition text-base sm:text-lg'>
              Learn More
            </button>
          </div>
          <div className='inline-flex items-center gap-2 bg-[#FFF3D6] dark:bg-[#3A2B1A] text-[#C97A1D] px-3 sm:px-4 py-2 rounded-full font-medium mb-4 md:mb-6 text-sm sm:text-base'>
            <IconCoffee size={16} className='sm:w-5 sm:h-5' /> Handcrafted
            Selection
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-sans'>
            Our Signature Brews
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-black/80 dark:text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0'>
            Discover our curated collection pf premium blends, each with its
            unique character and flavor profile.
          </p>
        </div>
        {/* Right - Coffee Splash Image */}

        {/* Decorative background shapes */}
        {/* <div className='absolute top-0 left-0 w-full h-full -z-10'>
          <div className='absolute top-0 left-0 w-2/3 h-2/3 bg-[#FFF3D6] dark:bg-[#2B2116] rounded-br-[300px] opacity-80' />
          <div className='absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#FFF3D6] dark:bg-[#2B2116] rounded-tl-[300px] opacity-80' />
        </div> */}
      </section>

      {/* Signature Brews Section */}
      <section className='relative px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-20 max-w-7xl mx-auto bg-quaternary'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white dark:bg-[#232323] rounded-2xl shadow p-4 sm:p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-lg'
            >
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className='mb-3 sm:mb-4 rounded-lg object-contain w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40'
              />
              <div className='flex items-center gap-1 mb-2'>
                {[...Array(product.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width='16'
                    height='16'
                    fill='#FFC043'
                    viewBox='0 0 24 24'
                    className='sm:w-[18px] sm:h-[18px]'
                  >
                    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                  </svg>
                ))}
                <span className='text-xs text-black/60 dark:text-white/60 ml-2'>
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className='font-semibold text-sm sm:text-base mb-1 text-center'>
                {product.name}
              </div>
              <div className='text-xs text-black/60 dark:text-white/60 mb-3 sm:mb-2 text-center'>
                {product.description}
              </div>
              <div className='flex items-center justify-between w-full mt-auto'>
                <span className='font-bold text-base sm:text-lg'>
                  {product.price}₹
                </span>
                <button className='bg-[#C97A1D] text-white font-semibold px-4 sm:px-6 py-2 rounded-full ml-3 sm:ml-4 hover:bg-[#a05e16] transition text-sm sm:text-base'>
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
