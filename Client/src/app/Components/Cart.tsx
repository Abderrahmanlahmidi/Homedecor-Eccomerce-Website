"use client"
import Image from 'next/image'
import product from "../assets/products/Product-1.png"
import add from "../assets/icons/Add.svg"
import minus from "../assets/icons/Minus.svg"
import remove from "../assets/icons/removecart.png"





const Cart = () => {


  //const cart = useSelector((state) => state.cart.cart)
  const cart = [];
  
  //const totalPrice = cart.reduce((total, item) => )


    return ( 

        <div className='w-full py-[24px] border-b border-1 border-b-[#E8ECEF]'>
           {/*the image the title product*/}
           <div className='flex w-full justify-between' >
            <div className='flex space-x-[16px]'>
              <div>
               <Image 
                 className='w-[80px] h-[96px]'
                 src={product} 
                 alt='product'
               />
              </div>
              
              <div className='items-between' >
                  <p className='text-[14px] font-[600]' >Tray Table</p>
                  
                <div className="inline-flex mt-[42px] rounded items-center justify-between p-[8px] w-[80px] h-[32px] border border-1 border-black">
                   <button  >
                     <Image src={add} alt='add' />
                   </button>
                    <p>2</p>
                   <button className="">
                     <Image src={minus} alt='minus' />
                   </button>
                </div>
                  
              </div>
            </div>
            {/*the price and remove button product */}
            <div>
              <p className='text-[14px] font-[600]' >$19.19</p>
              <p className='text-[14px] font-[600]' >$19.19</p>
              <button className='ml-[22px] mt-[8px]'>
                <Image src={remove} alt='close' />
              </button>
            </div>
          </div>
      </div>
     );
}
 
export default Cart;