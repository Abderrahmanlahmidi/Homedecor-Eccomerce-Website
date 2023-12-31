"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';


type Props = {
  isOpen: boolean;
  onClose: () => void;
};


const CartMenu = ({ isOpen, onClose }: Props) => {
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
      closed: { x: '100%', transition: { ease: 'easeInOut', duration: 0.2 } },
    };
  
    const bounceTransition = {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    };
  
    return (

      <motion.div
        className={`fixed top-0 left-0 h-full w-full bg-overlay z-50 ${isOverlayVisible ? 'block' : 'hidden'}`}
        initial="closed"
        animate={controls}
        variants={overlayVariants}
        onClick={onClose}
      >
        <motion.div
          className="flex   max-md:w-[343px] w-[413px] absolute right-0 bg-white h-full px-[24px] py-[40px]"
          initial="closed"
          animate={controls}
          variants={sidebarVariants}
          transition={bounceTransition}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='w-full flex flex-col justify-between' >
          
          <div className='w-full  space-y-[16px]' >
             <h3 className='text-[28px] font-[500]' >Cart</h3>
          </div>


          <div>
              
          </div>   

          </div>
        </motion.div>
      </motion.div>

    );
  };
  
  export default CartMenu;
  