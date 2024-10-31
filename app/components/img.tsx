
import Image from "next/image"
export default function Img() {
  return (
    <div className="flex flex-row gap-x-[44px]">
   <Image src={"/smphone.jpeg.png"}  alt="" height={53} width={42}/>
   <Image src={"/speaker.jpeg.png"} alt=""   height={52} width={28}/>
   <Image src={"/headphone.jpeg.png"} alt=""  height={53} width={53}/>
    </div>
  )
}
