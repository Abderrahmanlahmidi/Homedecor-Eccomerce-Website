import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css'; // Import core styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';



const Carouelbg = () => {
  
  
 const slides = [
  {
    url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
  },

  {
    url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  },
];


  return (
    <div className='w-[1120px] max-lg:w-full max-lg:px-[32px] max-w-screen-xl max-px-[32px] max-sm:px-[32px] max-md:px-[32px]'>
      <Swiper
        modules={[Navigation , Pagination]}
        pagination={true}
        slidesPerView={1}
        navigation={true}
        loop={true}
        onSlideChange={(swiper) => console.log('Slide changed: ', swiper.activeIndex)}
        onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='relative max-w-screen-[1120px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]'>
              <Image src={slide.url} layout="fill" objectFit="cover" alt={`slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouelbg;
