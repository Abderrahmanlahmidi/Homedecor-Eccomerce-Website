"use client"
import React from 'react';
import Carouelbg from '../Components/Carouselbg';
import Image from 'next/image';
import Paste1 from "@/app/assets/images/Paste-1.png"
import Paste2 from "@/app/assets/images/Paste-2.png"
import Paste3 from "@/app/assets/images/Paste-3.png"




type Props = {};

function Home({}: Props) {


  return (
    <div className='w-full  flex flex-col items-center'>

      <Carouelbg/>

        <div className='flex space-x-[24px] max-lg:space-x-0  items-center max-lg:px-[32px] w-[1120px] max-lg:w-auto max-lg:block mb-[40px]  mt-[30px]' >
           <h1 className='font-[500] tracking-[-2px] max-sm:text-[28px] text-[72px] max-lg:max-w-full max-w-[50%]'>Simply Unique/ Simply Better.</h1>
           <p className='text-[#6C7275] font-poppins ' >
            <span className='text-black font-[600]' >3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
           </p>
        </div>

        <div className=' max-lg:px-[32px] max-lg:w-full grid-system mb-[48px] ' >
          <div className='item-1 items-start  relative w-auto flex justify-center' >
               <div className='absolute top-[40px] max-sm:top-[20px] max-sm:left-[15px] left-[32px] space-y-[12px]' >
                 <h2 className='text-[32px] max-sm:text-[28px] font-[500]' >Living Room</h2>
                 <a className='font-[500]' href="">Shop Now</a>
              </div>
             <Image src={Paste1} alt={'Paste'}  />
          </div>

          <div className='item-2 flex  items-end relative justify-center' >
              <div className='absolute bottom-[40px] max-sm:left-[15px] left-[32px] space-y-[12px]' >
                 <h2 className='text-[32px] font-[500] max-sm:text-[28px]' >Bedroom</h2>
                 <a className='font-[500]' href="">Shop Now</a>
              </div>
              <Image src={Paste2} alt={'Paste'}  />
          </div> 

        <div className='item-3 w-auto relative flex justify-center items-end' >
            <div className='absolute max-sm:left-[15px] space-y-[12px] bottom-[40px] left-[32px]' >
               <h2 className='text-[32px] font-[500] max-sm:text-[28px]' >Kitchen</h2>
               <a className='font-[500]' href="">Shop Now</a>
            </div>
              <Image src={Paste3} alt={'Paste'}  />
           </div>
        </div>


        <div className='w-[1120px]  max-lg:px-[32px] space-y-[48px] mb-[48px]  max-lg:w-full ' >
          <div className='w-full space-y-[12px] flex items-end justify-between ' >
            <h2 className='text-[40px] max-w-[150px] font-poppins font-[500]' >New Arrivals</h2>
            <a  className='font-[500] ' href="/">More Products</a> 
          </div>
        </div>

    </div>
  );
}

export default Home;
 