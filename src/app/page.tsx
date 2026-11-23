import RightHeader from "@/features/home/components/RightHeader"
import Image from "next/image";
import images from '../../public/home' ;
import SearchIcons from "@/shared/components/ui/SearchIcons";
import ShopIcons from "@/shared/components/ui/ShopIcons";
import LeftHeader from "@/features/home/components/LeftHeader";
import UnderHeader from "@/features/home/components/UnderHeader";
import CategoryHeader from "@/features/home/components/CategoryHeader";
import SliderComponents from "@/features/home/components/SliderComponents";
import Slider from "@/features/home/components/Slider";
import PostIcons from "@/shared/components/ui/PostIcons";
import ChekIcons from "@/shared/components/ui/ChekIcons";
import { toPersianNumber } from "@/features/home/hooks/toPersianNumber";


const SliderArray = [
  {}
]

export default function home () {

  return (
    <div className="w-full flex flex-col items-center">    
    <div className="w-full h-[34px]  flex justify-between items-center z-2 px-[48px] bg-[#7A5B46]">
    <RightHeader/>
     <LeftHeader/>
    </div>
    <UnderHeader/> 
    <CategoryHeader />
    <div className="md:hidden absolute z-5 top-43 right-6">
       <p className="bg-[#BEA396] w-[185px] h-[28px] text-[#331200]   text-[10px] font-semibold flex items-center justify-center rounded-full">کالکشن جدید مبلمان و چوب طبیعی ۱۴۰۳</p>    </div>
     <div className="absolute z-5 top-45 right-20 w-[572px] h-100 flex flex-col
     max-md:hidden
     ">
      <p className="bg-[#BEA396] w-[223px] h-[28px] text-[#331200] mt-[40px]  text-[11px] font-semibold flex items-center justify-center rounded-full">کالکشن جدید مبلمان و چوب طبیعی ۱۴۰۳</p>
      <p className=" w-[541px] mt-[16px] text-[43px] font-bold ">هارمونی چوب و زندگی مدرن</p>
      <div className="flex gap-4">
        <div className="w-[226px] h-[48px]   mt-[16px] flex 
        text-[14px] bg-[#7A5B46] text-white
        justify-center items-center gap-2 rounded-[8px]">
              <p> مشاهده کالکشن جدید 1403</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
<path d="M4.5 9L0 4.5L4.5 0L5.55 1.0875L2.8875 3.75H12V5.25H2.8875L5.55 7.9125L4.5 9V9" fill="#FBF9F6"/>
</svg>
        </div>
        <div className="w-[226px] h-[48px] mt-[16px] rounded-[8px]  bg-[#eeddcdaa] flex justify-center items-center px-[5px] gap-[6px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<path d="M1.83333 14.1812C1.31944 14.1812 0.885417 14.0041 0.53125 13.65C0.177083 13.2958 0 12.8618 0 12.3479V0.931217C0 0.528439 0.1875 0.247189 0.5625 0.0874669C0.9375 -0.0722553 1.26389 -0.0132275 1.54167 0.26455L3.41667 2.13955L2.29167 3.26455L2.875 3.84788L4 2.72288L6.16667 4.88955L5.04167 6.01455L5.625 6.59788L6.75 5.47288L8.91667 7.63955L7.79167 8.76455L8.375 9.34788L9.5 8.22288L11.6667 10.3896L10.5417 11.5146L11.125 12.0979L12.25 10.9729L13.9167 12.6396C14.1944 12.9173 14.2535 13.2437 14.0938 13.6187C13.934 13.9937 13.6528 14.1812 13.25 14.1812H1.83333V14.1812M2.5 11.6812H9.41667L2.5 4.76455V11.6812V11.6812V11.6812V11.6812" fill="#924B1D"/>
</svg>
    <p className="">سفارش ساخت ابعاد دلخواه</p>
        </div>

      </div>
      <div className="w-[570px] h-[72px]  bg-[#eeddcdaa] rounded-[12px] shadow-[15px] mt-20 flex justify-between items-center px-[16px] ">
        <div className="w-[168px] h-[40px] flex items-center flex gap-3">
          <div className="w-[40px] h-[40px]  bg-[#7a5b466e] rounded-[8px]
          flex justify-center items-center
          ">
            <PostIcons width="18" height="14"/>
            </div>
          <div className="flex flex-col justify-center">  
             <p className="text-[12px] font-bold">ارسال ضدضربه</p>
              <p className="text-[11px] font-medium">بسته‌بندی چندلایه </p>
          </div> 
        </div>
        <div className="w-[168px] h-[40px] flex gap-3 flex items-center " >
          <div className="w-[40px] h-[40px] bg-[#7a5b466e] rounded-[8px]
          flex justify-center items-center
          ">
            <ChekIcons/>
          </div>
          <div className="flex flex-col justify-center ">
            <p className="text-[12px] font-bold">گارانتی محصول</p> 
            <p className="text-[11px] font-medium">ضمانت تولید اخنصاصی</p>
          </div>
        </div>
        <div className="w-[168px] h-[40px]  flex gap-3 flex items-center ">
          <div className="w-[40px] h-[40px]  bg-[#7a5b466e] rounded-[8px]
          flex justify-center items-center
          ">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
<path d="M10.8333 7.5C10.1389 7.5 9.54861 7.25694 9.0625 6.77083C8.57639 6.28472 8.33333 5.69444 8.33333 5C8.33333 4.30556 8.57639 3.71528 9.0625 3.22917C9.54861 2.74306 10.1389 2.5 10.8333 2.5C11.5278 2.5 12.1181 2.74306 12.6042 3.22917C13.0903 3.71528 13.3333 4.30556 13.3333 5C13.3333 5.69444 13.0903 6.28472 12.6042 6.77083C12.1181 7.25694 11.5278 7.5 10.8333 7.5V7.5M5 10C4.54167 10 4.14931 9.83681 3.82292 9.51042C3.49653 9.18403 3.33333 8.79167 3.33333 8.33333V1.66667C3.33333 1.20833 3.49653 0.815972 3.82292 0.489583C4.14931 0.163194 4.54167 0 5 0H16.6667C17.125 0 17.5174 0.163194 17.8438 0.489583C18.1701 0.815972 18.3333 1.20833 18.3333 1.66667V8.33333C18.3333 8.79167 18.1701 9.18403 17.8438 9.51042C17.5174 9.83681 17.125 10 16.6667 10H5V10M6.66667 8.33333H15C15 7.875 15.1632 7.48264 15.4896 7.15625C15.816 6.82986 16.2083 6.66667 16.6667 6.66667V3.33333C16.2083 3.33333 15.816 3.17014 15.4896 2.84375C15.1632 2.51736 15 2.125 15 1.66667H6.66667C6.66667 2.125 6.50347 2.51736 6.17708 2.84375C5.85069 3.17014 5.45833 3.33333 5 3.33333V6.66667C5.45833 6.66667 5.85069 6.82986 6.17708 7.15625C6.50347 7.48264 6.66667 7.875 6.66667 8.33333V8.33333M15.8333 13.3333H1.66667C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V2.5H1.66667V11.6667V11.6667V11.6667H15.8333V13.3333V13.3333M5 8.33333V8.33333V8.33333V8.33333V1.66667V1.66667V1.66667V1.66667V1.66667V1.66667V8.33333V8.33333V8.33333V8.33333" fill="#FFFFFF"/>
</svg>
          </div>
          <div className="flex flex-col justify-center ">
             <p className="text-[12px] font-bold">امکان پرداخت اقساطی</p> 
             <p className="text-[11px] font-medium">اقساط {toPersianNumber(4)} ماهه</p>
          </div>
        </div>
      </div>
     </div>
    <Slider />
    <div 
    className="bg-linear-to-t h-[34px] w-full  from-[#E6E4E0]  to-[#DFCDBE]"
    >

      
    </div>
    </div>
   
  )
}
