import React from 'react'
import LikeIcons from '@/shared/components/ui/LikeIcons'
import ShopIcons from '@/shared/components/ui/ShopIcons'
import images from '../../../../public/home'
import Image from 'next/image'
import { toPersianNumber } from '../hooks/toPersianNumber'
import { CgProfile } from "react-icons/cg";

const AcountButtons = () => {
  return (
    <>
          <div className="w-[306.38px] h-[48px] max-[816px]:hidden  flex items-center gap-[16px] justify-end">
                    <div className="w-[16px] h-full  flex items-center justify-center gap-[4px]">
                      <div className="w-[16px] h-[20px]   relative">
                        <ShopIcons  />
                        <div className="w-[16px] h-[16px]  bg-[#7A5B46] absolute top-[12px] left-[10px] rounded-[3px] flex justify-center items-center text-[12px] text-white">
                            <p className='mt-[2px]'>{toPersianNumber(2)}</p>
                            </div>

                      </div>
                    </div>
                    <div className="text-[#12121250]">|</div>
                    <div className="w-[25px] h-[34px]   
                    flex items-center gap-[1px] mt-[2px]">
                      <CgProfile className='w-[25px] h-[25px] text-[#00000080]' />
                    </div>
                    </div> 
    </>
  )
}

export default AcountButtons