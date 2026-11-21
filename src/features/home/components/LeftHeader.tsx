import PhoneIcons from '@/shared/components/ui/PhoneIcons'
import React from 'react'


const LeftHeader = () => {
  return (
    <>
          <div className="w-[200px] h-[18px]  flex justify-center items-center gap-[16px]">
      <div className="w-[80px]   text-[#FBF9F6] text-[12px] font-medium">پیگیری سفارش</div>
      <div className="text-[#FBF9F6] text-[10px] font-regular">|</div>
       <div className="w-[100px] flex   h-[18px] justify-between ">
        <PhoneIcons/>
<p className="text-[11px] text-[#FFDBC9] flex h-full items-center mt-0.5">09352505353</p>
       </div>
    </div>
    </>
  )
}

export default LeftHeader