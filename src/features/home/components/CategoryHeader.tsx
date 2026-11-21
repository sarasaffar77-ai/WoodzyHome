import { ArrowBigDown, ArrowDown } from "lucide-react"


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
    <div className="w-full px-[48px] h-[51px] border border-amber-400 z-2">
        <div className="flex gap-[24px] items-center h-full text-[#7A5B46]">
     {CategoryArray.map((item, i)=>(
        <div className="flex gap-1  h-full items-center">
        <div className="text-[14px] font-semibold">
            {item.title}
        </div>
           {item.isArrow && (
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
<path d="M4 4.93333L0 0.933333L0.933333 0L4 3.06667L7.06667 0L8 0.933333L4 4.93333V4.93333" fill="#4D4540"/>
</svg>          
 )}

        </div>
     ))}
     </div>
    </div>
  )
}

export default CategoryHeader