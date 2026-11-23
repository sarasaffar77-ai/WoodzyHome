import { ArrowBigDown, ArrowDown, LocateIcon } from "lucide-react"
import { CiLocationOn } from "react-icons/ci"
import { SlLocationPin } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";



const CategoryArray = [
    {title:'نخست' , isArrow: false , isOrder : false},
    {title:'فروشگاه و محصولات' , isArrow: true , isOrder : false},
    {title:'سفارش ساخت اختصاصی' , isArrow: false , isOrder : true},
    {title:'مجله دکوراسیون و ژورنال' , isArrow: false , isOrder : false},
    {title:'درباره هورام' , isArrow: false , isOrder : false},
    {title:'تماس با ما' ,isArrow: false , isOrder : false},
]


const CategoryHeader = () => {
  return (
    <div className="w-full px-[48px]   bg-linear-to-b   from-[#E6E4E0]  to-[#DFCDBE]    h-[51px]  z-2 flex justify-between max-md:justify-start max-md:pr-[16px] ">
    <div className="flex gap-[24px] items-center h-full ">
     {CategoryArray.map((item, i)=>(
        <div className="flex gap-1 max-lg:hidden  h-full items-center text-[#7A5B46] hover:text-[#7A5B4695]
        cursor-pointer
        ">
        <div className="text-[14px] font-semibold">
            {item.title}
        </div>
           {item.isArrow === true && (
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none" className="hover:stroke-[#7A5B4695] fill-[#4D4540]">
<path d="M4 4.93333L0 0.933333L0.933333 0L4 3.06667L7.06667 0L8 0.933333L4 4.93333V4.93333" />
</svg>          
 )} 
     {item.isOrder === true && (
        <p className='px-[6px] py-[2px] bg-[#bea396] text-[#331200] rounded-[4px] text-[11px] font-medium '>سفارشی</p>    
        
        )}

        </div>
     ))}
     </div>
     <div className="flex items-center h-full w-[170px]  justify-start md:justify-end  ">
        <TfiLocationPin className="w-[22px] h-[17px] text-[#7A5B46] stroke-[0.5px]" />
        <div className="flex   gap-2 items-center h-full p-1">
        <p className=" text-[14px] font-medium text-[#7A5B46] mt-1">انتخاب آدرس</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 5" fill="none" className="hover:stroke-[#7A5B4695] fill-[#4D4540] mt-1.25">
<path d="M4 4.93333L0 0.933333L0.933333 0L4 3.06667L7.06667 0L8 0.933333L4 4.93333V4.93333" />
</svg>  
        </div>
        
     </div>
    </div>
  )
}

export default CategoryHeader