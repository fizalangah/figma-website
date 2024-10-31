
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

export default function Content() {
    return (


    <div className="w-[596px] h-[410px] mt-[90px] ml-[90px] gap-y-5 flex flex-col">

         <div className="w-[544px] h-[144px]">

            <h2 className="text-5xl font-bold text-[#333333]">
              Largest <span className="text-[#388FCB] text-5xl font-bold">Wholesaler</span> <br />
            </h2>

            <div className="text-container relative h-[50px] overflow-hidden text-5xl font-bold text-[#388FCB] mt-5">
              <span className="text-5xl font-bold text-[#333333] mr-[10px]">of</span>
              <span className="absolute top-0 left-0 w-full animate-slide-up-2 ml-[80px]">Laptops</span>
             <span className="absolute top-0 left-0 w-full animate-slide-up-1 ml-[80px]">Mobile Phones</span>
             <span className="absolute top-0 left-0 w-full animate-slide-up-3 ml-[80px]">Tablets</span>
         </div>

            </div>



            <div>
                <p className=" w-[526px] h-[48px] font-semibold text-[16px] text-[#333333]">Supply that meets Demand. Get the best wholesale prices of <br /> used and refurbished Mobile Stocks</p>
            </div>


            <div className="w-[200px] h-[30px]">
                <Link href={""} className="font-semibold text-[18px] text-[#388FCB] flex flex-row gap-2"> <span>Learn More </span> <span className="mt-[5px]"> <FaArrowRight /></span> </Link>
            </div>



            <div className="flex flex-row gap-[24px] w-[596px] h-[56px]">

                <button className="w-[250px] h-[54px] rounded-[40px] border border-[#7CC140] flex flex-row items-center justify-center gap-2 px-[20px]">
                <HiOutlineMail className="w-[21px] h-[21px] " /> Email
                </button>


                <button className="w-[158px] h-[54px] rounded-[40px] pt-[15px] pb-[15px] pl-[20px] pr-[20px] bg-[#7CC140] flex flex-row items-center justify-center text-[#ffffff] gap-3 border border-[#7CC140] hover:bg-[#ffffff] group">  <span className="group-hover:text-[#7CC140]">Subscribe</span>
                <FaArrowRight className="h-[15px] w-[15px] group-hover:text-[#7CC140] mt-1" />
                </button>


                <button className="w-[158px] h-[54px] rounded-[40px] pt-[15px] pb-[15px] pl-[20px] pr-[20px] bg-[#388FCB] flex flex-row items-center justify-center text-[#ffffff] gap-3 border border-[#388FCB] hover:bg-[#ffffff] group">
                 <FaArrowDown className="h-[15px] w-[15px] group-hover:text-[#388FCB] mt-1" />
                 <span className="group-hover:text-[#388FCB]">Stock List</span>
                </button>

            </div>


             <div className="w-[596px] h-[48px] flex flex-row gap-x-0"   >


                <div className="w-[130px] flex flex-row gap-x-[6px] pt-[15px] pr-0 ">

                    <Link href={""}>  <IoLogoInstagram className="text-xl text-white rounded-[50%]"
                        style={{ background: 'linear-gradient(90deg, #7CC140 0%, #388FCB 100%)' }} /> </Link>


                    <Link href={""}> <BiLogoFacebook className="text-xl text-white rounded-[50%]"
                        style={{ background: 'linear-gradient(90deg, #7CC140 0%, #388FCB 100%)' }} /> </Link>

                    <Link href={""}><TiSocialLinkedin className="text-xl rounded-[50%] text-white"
                        style={{ background: 'linear-gradient(90deg, #7CC140 0%, #388FCB 100%)' }} /></Link>


                    <Link href={""}> <TiSocialLinkedin className="text-xl text-white rounded-[50%]"
                        style={{ background: 'linear-gradient(90deg, #7CC140 0%, #388FCB 100%)' }} /></Link>


                    <Link href={""}><FaXTwitter className="text-xl text-white rounded-[50%]"
                        style={{ background: 'linear-gradient(90deg, #7CC140 0%, #388FCB 100%)' }} /></Link>
                </div>


                <div
                    className="w-[256px] h-[48px] rounded-[40px] pt-[12px] pb-[12px] pl-[12px] pr-[16px] flex flex-row gap-x-[8px] items-center font-bold"
                    style={{
                        background: 'linear-gradient(90deg, #7CC140 0%, #388FCB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    <MdPeopleAlt className="text-[#7CC140] text-xl " />
                    400k people Registered
                </div>

            </div>

        </div>
    )
}
