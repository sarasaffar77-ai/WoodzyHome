import React from 'react'
import LikeIcons from '@/shared/components/ui/LikeIcons'
import ShopIcons from '@/shared/components/ui/ShopIcons'
import images from '../../../../public/home'
import Image from 'next/image'
import { toPersianNumber } from '../hooks/toPersianNumber'

const AcountButtons = () => {
  return (
    <>
          <div className="w-[306.38px] h-[48px] border border-black flex items-center gap-[16px]">
                    <div className="w-[36px] h-[34.35px] border border-blue-500 flex items-center justify-center relative">
                     <LikeIcons/>
                     <div className=" w-[16px] h-[16px] border border-[#924B1D] absolute top-[2px] left-[2px] bg-[#924B1D] rounded-full flex justify-center items-center text-[12px] text-white">{toPersianNumber(4)}</div>
                    </div>
                    <div className="w-[114.8px] h-full border border-red-700 flex items-center justify-center gap-[4px]">
                      <div className="w-[16px] h-[20px] border border-purple-500 relative">
                        <ShopIcons />
                        <div className="w-[16px] h-[16px] border border-black bg-black absolute top-[-5px] left-[4px] rounded-full flex justify-center items-center text-[12px] text-white">{toPersianNumber(2)}</div>

                      </div>
                      <div className="w-[68.8px] h-[34px] border border-black flex items-center justify-center font-medium text-[11px] ">سبد خرید</div>
                    </div>
                    <div className="">|</div>
                    <div className="w-[106.58px] h-[34px] border border-gray-500 flex items-center gap-[1px]">
                    <div className="w-[34px] h-[34px] border border-red-400 ">
                     <Image src={images.aa}
                     width={32}
                     height={32}
                     alt="ddd"
                     className="h-[34px] w-[34px] border border-amber-300 rounded-full"
                     />
                    </div>
                    <div className="w-[71px] h-[34px] border border-amber-700 text-[11px] font-medium text-[#050301]">
                      مینا حسینی
                     <div className="w-[69px] h-[16px] border border-blue-300 text-[10px] font-medium text-[#4D4540] ">حساب کاربری</div>
                     </div>
                    </div>
                    </div> 
    </>
  )
}

export default AcountButtons