

import Link from "next/link";
import Image from "next/image";
export default function Navbar() {


  return (
    <div>
              


  <nav className="flex justify-center text-center items-center pt-[20px] ">
                           
                        
<div className="mr-[50px] space-x-10 font-semibold text-xl ">
<Link href={""} className="hover:border-b-4 border-green-500 rounded">Home</Link>
<Link href={""} className="hover:border-b-4 border-green-500 rounded">About Us</Link>
<Link href={""} className="hover:border-b-4 border-green-500 rounded ">Wholesale</Link>
</div>


<div>
  <Image src={"/wifi.jpeg.png"} alt="" width={28} height={28} className="ml-[75px] mb-[-10px] pulse-animation"/>
<Image src={"/logo.jpeg.png"} alt="" width={82} height={40}/> <Link href={""}></Link>
</div>


<div className="ml-[50px] space-x-10 font-semibold text-xl">
<Link href={""} className="hover:border-b-4 border-green-500 rounded mt-2">Service</Link>
<Link href={""} className="hover:border-b-4 border-green-500 rounded mt-2">News</Link>
<Link href={""} className="hover:border-b-4 border-green-500 rounded mt-2">How it Works</Link>
</div>






</nav>
    </div>
  )
}
