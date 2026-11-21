import RightHeader from "@/features/home/components/RightHeader"
import Image from "next/image";
import images from '../../public/home' ;
import SearchIcons from "@/shared/components/ui/SearchIcons";
import ShopIcons from "@/shared/components/ui/ShopIcons";
import LeftHeader from "@/features/home/components/LeftHeader";
import UnderHeader from "@/features/home/components/UnderHeader";
import CategoryHeader from "@/features/home/components/CategoryHeader";




export default function home () {

  return (
    <div className="w-full flex flex-col items-center">    
    <div className="w-full h-[34px]  flex justify-between items-center z-2 px-[48px] bg-[#7A5B46]">
    <RightHeader/>
     <LeftHeader/>
    </div>
    <UnderHeader/> 
    <CategoryHeader />
    </div>
   
  )
}
