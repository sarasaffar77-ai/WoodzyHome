import React from 'react'
import PostIcons from '@/shared/components/ui/PostIcons'
import images from '../../../../public/home'
import Image from 'next/image'
const RightHeader = () => {
  return (
       <div className="  h-[18px]  ">
    <div className="   h-[18px]   flex items-center gap-[8px]">
    <div className=" w-[15px] h-[11px] max-lg:hidden ">
      <PostIcons />
    </div>
    <div className="  h-[18px]    text-[#FBF9F6] text-[12px] font-medium max-md:hidden">ارسال رایگان سفارش‌های بالای ۳۰۰ میلیون تومان به سراسر کشور </div>
    <div className="  h-[18px]    text-[#FBF9F6] text-[12px] font-medium max-md:hidden"></div>
    </div>
    </div>
  )
}

export default RightHeader