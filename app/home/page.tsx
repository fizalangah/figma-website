"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Top from "../components/top";
import Navbar from "../components/navbar";
import Content from "../components/content";
import Img from "../components/img";
import Slider from "../components/slider";

export default function Homepage() {
  const [activeDot, setActiveDot] = useState(0);

  // Scroll position track 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 300) {
        setActiveDot(0);
      } else if (scrollPosition >= 300 && scrollPosition < 600) {
        setActiveDot(1);
      } else if (scrollPosition >= 600 && scrollPosition < 900) {
        setActiveDot(2);
      } else {
        setActiveDot(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-[1440px] relative">
      {/* Dots Scroll Indicator */}
      <div className="fixed top-1/2 right-10 transform -translate-y-1/2 flex flex-col gap-4">
        {[0, 1, 2, 3].map((dot, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mr-[-30px] ${
              activeDot === index ? "bg-green-500 scale-125 h-6 w-3 " : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>



      {/* Page Content */}

         {/* navbar */}
      <div className="w-full">
       <Top />
      <div className="bg-sky-200 h-[20px] w-full"></div>
      <div className="pt-[30px]">
       <Navbar />
      </div>


      <div className="flex flex-row">
      <div className="flex flex-col relative h-[859px]">
        <div
         className="w-[172px] h-[157px] absolute top-0 left-0"
         style={{
             backgroundImage: "url(/m2.jpeg.png)",
             backgroundSize: "cover",
             backgroundPosition: "center",
              }}
            />

       {/* leftside content */}
         <Content />
         <div
         className="w-[192px] h-[150px] absolute left-[150px] top-[107px]"
           style={{
              backgroundImage: "url(/m1.jpeg.png)",
               backgroundSize: "cover",
              backgroundPosition: "center",
              }}
            />
          </div>

          {/* background Images */}

         <div
         className="h-[859px] w-[983px] relative mt-[-110px]  ml-[-100px] wavy-background"
          style={{
            backgroundImage: "url(/big1.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
          >
            
            <div
            
           className="w-[107.62px] h-[100px] absolute ml-[560px] mt-[110px]   rotate-animation">


           <div className="absolute w-[107.62px] h-[100px] left-0 top-0   rotate-animation "
           style={{
             backgroundImage: "url('/big3.jpeg.png')", // Replace with your image path
             backgroundSize: "cover",
             backgroundPosition: "center",
             zIndex: 1,
           }}
         />
   
         {/* Second Image with a slight offset */}
         <div
           className="absolute w-[107.62px] h-[100px] left-[5px] top-[5px] wave-image  rotate-animation"
           style={{
             backgroundImage: "url('/big3.jpeg.png')", // Same image or different image
             backgroundSize: "cover",
             backgroundPosition: "center",
             zIndex: 0,
             mixBlendMode: 'screen',
             filter: 'brightness(0.8)',
           }}
         />
       </div>
          

            


            <div
            className="w-[433.38px] h-[406.39px] absolute ml-[230px] mt-[300px] rotate-animation">
            <div
        className="absolute w-full h-full left-0 top-0   rotate-animation"
        style={{
          backgroundImage: "url('/big2.jpeg.png')", // Replace with your first image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      {/* Second Image (Lighter Color) */}
      <div
        className="absolute w-full h-full    left-[20px] top-[20px]  rotate-animation"
        style={{
          backgroundImage: "url('/big2.jpeg.png')", // Same image for overlap
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          mixBlendMode: 'screen', // Makes the image lighter
          filter: 'brightness(0.7)', // Optional: additional adjustment to make it lighter
        }}
      />
    </div>
            


            <div className="ml-[300px] absolute mt-[200px] z-10">
               <Image src={"/mobile.jpeg"} alt="Mobile" width={271} height={496} />
             </div>
          </div>
        </div>
      
                 

        <div className="flex flex-col my-[-350px]">
          <div
            className="h-[221px] w-[293px] bg-no-repeat opacity-[24%] ml-[10px] animate-rotate122"
             style={{
              backgroundImage: "url(/tri2.jpeg.png)",
              animation: "rotate39 10s linear infinite",
            }}
          ></div>


          <div
            className="h-[221px] w-[293px] bg-no-repeat animate-rotate39"
            style={{
              backgroundImage: "url(/tri.jpeg.png)",
              animation: "rotate39 10s linear infinite",
            }}
          ></div> 
        </div>


                   {/* scrolling animation images */}

        <div className="scroll-container w-full h-[54px] mt-[-200px]">
          <div className="scroll-content gap-x-[60px]">
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
          </div>
        </div>
                        

                        {/* container 2 */}

        <div className="w-[1284px] h-[520px] mt-[100px] ml-[100px] flex justify-center text-center flex-col">

          <div className="flex flex-col items-center">

            <div className="w-[337px] h-[103px] font-bold text-5xl flex flex-ror ">
               <span
                className="text-white w-[198px] h-[103px] text-center rounded-[50%] p-5"
                style={{ background: "linear-gradient(90deg, #7CC140 0%, #388FCB 100%)" }} >
                Mobile
              </span>
              <span className="text-[#388FCB] pt-5">Stock</span>
                </div>

             <p className="text-[#333333] font-semibold text-xl text-center mt-[20px]">
              We stay up to date with the latest technology trends and offer innovative solutions
              that help  <br />  you stay ahead in competition
             </p>

          </div>

          <Slider />
        </div>
      </div>
    </main>
  );
}
