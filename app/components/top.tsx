import Link from "next/link";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

export default function Top() {
  return (
    <div>

<div className="bg-[#388FCB] w-[1440px] h-[43px] pt-[5px] pb-[5px] pl-[66px]  pr-[66px] ">
        <div className="w-[1308px] h-[33px] flex justify-between">
            <div className="flex gap-5  font-[500 ] text-sm text-[#ffffff]  pt-[6px]">
                <Link href={""} className="flex gap-[6px]">  <span className="text-xl"><HiOutlineMail /></span> info@abc.com
                </Link>
                <Link href={""} className="flex gap-[6px]"></Link> <span className="text-xl"><TbPhone /></span>  0123456789
            </div>
            <div className="flex gap-3" >
                <button className="w-[80px]h-[18px] border-r-[1px] pt-[6px]  pb-[6px] gap-2 font-[500] text-xs text-[#ffffff] pr-4">Perivacy Policy</button>
                <button className="w-[154px] h-[18px] font-[500] text-xs text-[#ffffff] pb-[6px]  pt-[8px]"> Terms and Condition</button>
            </div>

        </div>
    </div>   
    </div>
  )
}

