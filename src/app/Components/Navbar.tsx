"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import percentticket from "@/app/assets/icons/ticket-percent.png"
import arrow from "@/app/assets/icons/arrow.png"
import close from "@/app/assets/icons/close.png"
import user from "@/app/assets/icons/user-circle.png"
import bag from "@/app/assets/icons/shopping-bag.png"
import search from "@/app/assets/icons/search.png"
import burger from "@/app/assets/icons/burger.svg"
import IconButton from '@mui/material/IconButton';
import Sidebarmenu from "./Sidebarmenu"
import Bagsidebar from './Bagsidebar';
import { Badge } from '@mui/material';


const Navbar  = () => {

  const [Close, setClose] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarbagOpen, setSidebarbagOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarbagToggle = () => {
    setSidebarbagOpen(!isSidebarbagOpen);
  };

  const closeToggle = () => {
    setClose(!Close);
  }

  const scrolled = "shadow";

  useEffect(() => {
      const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolled = scrollTop > 0;

      setHasScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    return(

        <div className='fixed w-full top-0 flex flex-col justify-center  z-30' >
          
            {/*------------------------ Percent-par ------------------------------*/}
            {Close === false ? (
                <div className="h-[40px] max-lg:justify-center bg-[#F3F5F7] items-center flex justify-between " >
                    <div></div>
                    <div className='flex items-center  max-sm:space-x-[8px] space-x-[12px]' >
                      <Image className=' max-sm:w-[16px]  max-sm:h-[16px]' src={percentticket} alt={'ticket'} />
                      <p className='font-poppins  max-sm:text-[12px] font-[600] text-[#343839]' >30% off storewide — Limited time !</p>
                      <div className='flex space-x-[4px] items-center font-poppins' >
                         <a className='underline decoration-1 text-blue font-[500] max-sm:text-[12px] text-[14px]' href="">Show more</a><Image  className='w-[24px] h-[24px] max-sm:w-[16px]  max-sm:h-[16px]' src={arrow} alt='arrow' />
                      </div>
                    </div>
                    <button onClick={closeToggle} className='w-[24px] h-[24px] max-sm:w-[16px]  max-sm:h-[16px] mr-[14px] max-lg:mr-[0px]' >
                        <Image  src={close} alt='close'/>
                    </button>
                </div>
            ):(
                <></>
            )}
            
            {/*------------------------ Navbar ------------------------------*/}
            <nav className={`bg-white h-[60px] flex justify-center w-full ${hasScrolled ? scrolled : ''}`} >
                <div className='flex justify-between max-lg:px-[16px] w-[1120px] items-center' >
                    <div className='flex items-center ' >
                      <IconButton onClick={handleSidebarToggle} className='hidden  max-lg:block' ><Image className='w-[24px] text-black max-md:h-[20px] max-md:w-[20px] h-[24px]' src={burger}  alt='burger' /></IconButton>
                      <h3 className='text-black max-md:text-[16px] text-[24px] font-[500] font-poppins' >3legant</h3>
                    </div>
                   
                   <ul className='flex max-lg:hidden space-x-[40px]' >
                     <li><a className='font-Grotesk text-[14px] font-[500] text-[#6C7275] hover:text-black transition delay-75' href="/">Home</a></li>
                     <li><a className='font-Grotesk text-[14px] font-[500] text-[#6C7275] hover:text-black transition delay-75' href="/Shop">Shop</a></li>
                     <li><a className='font-Grotesk text-[14px] font-[500] text-[#6C7275] hover:text-black transition delay-75' href="/Product">Product</a></li>
                     <li><a className='font-Grotesk text-[14px] font-[500] text-[#6C7275] hover:text-black transition delay-75' href="Contact">Contact Us</a></li>
                   </ul>
                   <div className='flex max-lg:space-x-[0px]  space-x-[10px]' >
                      <IconButton className='max-lg:hidden' ><Image src={search} alt='search' /></IconButton>
                      <IconButton className='max-lg:hidden' ><Image src={user} alt='user' /></IconButton>
                      <IconButton onClick={handleSidebarbagToggle} > <Badge color="secondary" badgeContent={1} ><Image src={bag} alt='bag' /></Badge></IconButton> 
                   </div>
                </div>
                <Sidebarmenu  isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
                <Bagsidebar isOpen={isSidebarbagOpen} onClose={handleSidebarbagToggle} />
            </nav>

        </div>

    )
}

export default Navbar