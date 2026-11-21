import React from 'react'
import images from '../../../../public/home'
import Image from 'next/image'
import SearchIcons from '@/shared/components/ui/SearchIcons'
import ShopIcons from '@/shared/components/ui/ShopIcons'
import { toPersianNumber } from '../hooks/toPersianNumber'
import LikeIcons from '@/shared/components/ui/LikeIcons'
import AcountButtons from './AcountButtons'
const UnderHeader = () => {
  return (
    <>
          <div className=" w-full h-[80px]  mt-[6px] flex justify-center md:px-[48px]">
      <div className="w-full h-[80px]   flex items-center justify-between">
        <div className="w-[600px] max-md:w-full max-md:px-5 flex items-center gap-3">
          <Image 
          src={images.ff}
          width={80}
          height={80}
          alt="ddd"
          className='w-24 h-24 z-1 max-[460px]:hidden max-md:w-20 max-md:h-20'
          />
          <div className=" w-full h-[42px]   flex justify-center ">
                    <div className="w-full h-full bg-[#7a5b461b] flex items-center gap-[15px] rounded-[8px] pr-[16px] ">
                     <SearchIcons />
                     
                      <input placeholder="جستجوی میز، کنسول، شلف چوبی یا کد کالا... " className="w-[80%] p placeholder:text-[12px] font-regular outline-none " />
                    </div>
                  </div>
        </div>
                  
                 <AcountButtons/>   
      </div>
     </div>
    </>
  )
}

export default UnderHeader