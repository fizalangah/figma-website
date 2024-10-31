
import Image from "next/image"


export default function Card() {
  return (
    <div className="w-[308px] h-[223px] rounded-[15px] p-[3px] bg-gradient-to-r from-[#7CC140] to-[#388FCB]  ">
  <div className="w-full h-full rounded-[12px] pt-[29px] pb-[29px] pl-[31px] pr-[31px]flex justify-center  items-center   text-center flex-col  bg-custom-gradient ">
    <div  className="ml-[80px]">
    <Image src={"/iphone.jpeg"} alt=" " width={91} height={109}/>
    </div>
    
 
     <div className="mt-[10px]">
     <h5 className="text-xl font-[500px]">Iphone 14 Pro Max</h5>
     <p className="text-[#888888] text-sm font-[500px]">Apple iPhone 14 Pro 512GB Gold(MQ233)</p>
     </div>
    
     </div>
</div>

  )
}
