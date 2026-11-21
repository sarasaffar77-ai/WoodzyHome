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
          <div className=" w-full h-[132px] border border-red-700 mt-[6px] flex justify-center px-[48px]">
      <div className="w-full h-[80px] border border-amber-300 flex items-center justify-between">
        <div className="">
          <Image 
          src={images.ff}
          width={80}
          height={80}
          alt="ddd"
          />
          <p></p>
        </div>
                  <div className=" w-[539.09px] h-[42px] border border-blue-700 flex justify-center">
                    <div className="w-[491.09px] h-full border border-[#D0C4BD] flex items-center gap-[15px] rounded-[8px] pr-[8px] ">
                     <SearchIcons />
                     
                      <input placeholder="جستجوی میز، کنسول، شلف چوبی یا کد کالا... " className="w-[230px] p placeholder:text-[12px] font-regular outline-none " />
                    </div>
                  </div>
                 <AcountButtons/>   
      </div>
     </div>
    </>
  )
}

export default UnderHeader