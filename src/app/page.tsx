import RightHeader from "@/features/home/components/RightHeader"
import Image from "next/image";
import images from '../../public/home' ;
import SearchIcons from "@/shared/components/ui/SearchIcons";
import LikeIcons from "@/shared/components/ui/LikeIcons";
import ShopIcons from "@/shared/components/ui/ShopIcons";
import LeftHeader from "@/features/home/components/LeftHeader";
import UnderHeader from "@/features/home/components/UnderHeader";




export default function home () {

  return (
    <div className="w-full flex flex-col items-center">    
    <div className="w-full h-[34px]  flex justify-between items-center px-[48px] bg-[#221C18]">
    <RightHeader/>
     <LeftHeader/>
    </div>
   <UnderHeader/>
    </div>
   
  )
}
