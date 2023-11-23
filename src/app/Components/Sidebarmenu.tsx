"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import close from "@/app/assets/icons/close.png";
import search from "@/app/assets/icons/search.png";
import instagram from "@/app/assets/icons/instagram.png";
import facebook from "@/app/assets/icons/facebook.png";
import youtupe from "@/app/assets/icons/youtube.png";
import { IconButton } from '@mui/material';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebarmenu = ({ isOpen, onClose }: Props) => {
  const controls = useAnimation();

  const [isOverlayVisible, setOverlayVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setOverlayVisible(true);
      controls.start('open');
    } else {
      setTimeout(() => {
        setOverlayVisible(false);
      }, 200);
      controls.start('closed');
    }
  }, [isOpen, controls]);
  

  const overlayVariants: Variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const sidebarVariants: Variants = {
    open: { x: 0, transition: { ease: 'easeInOut', duration: 0.2 } },
    closed: { x: '-100%', transition: { ease: 'easeInOut', duration: 0.2 } },
  };

  const bounceTransition = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  };

  return (
    <motion.div
      className={`fixed  top-0 left-0 h-full w-full bg-overlay z-50 ${isOverlayVisible ? 'block' : 'hidden'}`}
      initial="closed"
      animate={controls}
      variants={overlayVariants}
      onClick={onClose}
    >
      <motion.div
        className="flex w-[343px] bg-white h-full flex-col justify-between  p-[24px]"
        initial="closed"
        animate={controls}
        variants={sidebarVariants}
        transition={bounceTransition}
        onClick={(e) => e.stopPropagation()}
      >
   
   

        <div className='w-full flex flex-col h-full justify-between' >
          <div className='space-y-[16px]'  >
             <div className='w-full items-center flex justify-between' >
           <h3 className='text-[16px] font-[500] font-poppins' >3legant</h3>
           <IconButton><Image onClick={onClose} className='cursor-pointer' src={close} alt="Close" /></IconButton>
         </div>
         <div className='h-[46px] flex space-x-[8px] rounded-[6px] items-center px-[16px] border border-1 border-[#6C7275]'>
            <Image src={search} alt='search' />
            <input className='outline-none placeholder:font-poppins placeholder:text-[14px]' type="text" placeholder='Search' />
         </div>
         <div className='space-y-[16px]' >
            <div className='w-full pb-[16px]  border-b-[1px] border-[#E8ECEF]' >
              <a className='font-[500] font-poppins' href="/">Home</a>
            </div>
            <div className='w-full pb-[16px]  border-b-[1px] border-[#E8ECEF]' >
              <a className='font-[500] font-poppins' href="/">Shop</a>
            </div>
            <div className='w-full pb-[16px]  border-b-[1px] border-[#E8ECEF]' >
              <a className='font-[500] font-poppins' href="/">Product</a>
            </div>
            <div className='w-full pb-[16px]  border-b-[1px] border-[#E8ECEF]' >
              <a className='font-[500] font-poppins' href="/">Contact Us</a>
            </div>
         </div>

          </div>
        

         <div className='space-y-[19px] w-full  flex flex-col' >
           <button className='bg-[#141718] font-[18px] text-white font-poppins w-full h-[52px] rounded-[6px]' >
             Sign In
           </button>
           <div className='space-x-[24px] flex' >
               <Image className='cursor-pointer' src={instagram} alt='social-media' /> 
               <Image className='cursor-pointer' src={facebook} alt='social-media' /> 
               <Image className='cursor-pointer' src={youtupe} alt='social-media' /> 
           </div>
         </div>

       </div>
      
      
      </motion.div>
    </motion.div>
  );
};

export default Sidebarmenu;
