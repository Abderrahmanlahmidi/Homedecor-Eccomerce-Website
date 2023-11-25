import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import background1 from "@/app/assets/images/background-1.png"
import background2 from "@/app/assets/images/background-2.jpg"
import background3 from "@/app/assets/images/background-3.jpg"
 




const Carouelbg = () => {


  const customStyles = {
    navigation: {
      color: 'white', // Change this to your desired color
    },
    pagination: {
      color: 'white', // Change this to your desired color
    },
  };


  const backgrounds = [background1, background2, background3];
 
    
  



  return (
    <div className='w-[1120px] text-[#fff] max-lg:w-full max-lg:px-[32px] max-w-screen-xl max-px-[32px] max-sm:px-[32px] max-md:px-[32px]'>
      <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerView={1}
          loop={true}
          onSlideChange={(swiper) => console.log('Slide changed: ', swiper.activeIndex)}
          onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
          style={{ '--swiper-navigation-color': customStyles.navigation.color, '--swiper-pagination-color': customStyles.pagination.color }}
      >
        {backgrounds.map((background, index) => (
          <SwiperSlide  key={index}>
            <div className='relative max-w-screen-[1120px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]'>
              <Image src={background} layout="fill" objectFit="cover" alt={`slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouelbg
