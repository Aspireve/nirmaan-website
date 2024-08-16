// "use client";
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { staggerContainer } from "../utils/motion";

// const About1 = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start("visible");
//   }, [controls]);

//   return (
//     <>

//       {/* <section
//         className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black dark:bg-dark"
//         style={{ zIndex: 5 }}
//       >
//         <div className="container mx-auto" style={{ zIndex: 5 }}>
//           <motion.div
//             className="flex flex-wrap items-center justify-between -mx-4"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1, transition: { duration: 0.5 } }, // Adjust the duration as needed
//             }}
//             initial="hidden"
//             animate={controls}
//             style={{ zIndex: 5 }}
//           >
//             <motion.div
//               className="w-full px-4 lg:w-6/12"
//               variants={{
//                 visible: { opacity: 1, x: 0 },
//                 hidden: { opacity: 0, x: -50 },
//               }}
//             >
//               <div className="flex items-center -mx-3 sm:-mx-4">
//                 <div className="w-full px-3 sm:px-4 xl:w-1/2">
//                   <div className="py-3 sm:py-4">
//                     <img
//                       src="aboutimg1.jpeg"
//                       alt=""
//                       className="w-full rounded-2xl"
//                     />
//                   </div>
//                   <div className="py-3 sm:py-4 ">
//                     <img
//                       src="aboutimg2.jpeg"
//                       alt=""
//                       className="w-full rounded-2xl"
//                     />
//                   </div>
//                 </div>
//                 <div
//                   className="w-full px-3 sm:px-4 xl:w-1/2 "
//                   style={{ zIndex: 5 }}
//                 >
//                   <div className="relative z-10 my-4 mr-2 ">
//                     <img
//                       src="aboutimg3.jpeg"
//                       alt=""
//                       className="w-full rounded-2xl"
//                     />
//                     <span className="absolute -right-7 -bottom-7 z-[-1]">
//                       <svg
//                         width={134}
//                         height={106}
//                         viewBox="0 0 134 106"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle
//                           cx="1.66667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 31 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3334"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 60.3334 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 117.667 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 103 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy={104}
//                           r="1.66667"
//                           transform="rotate(-90 132 104)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 89.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 89.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 31 89.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="89.3333"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 89.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 89.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 89.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 89.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 89.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 103 89.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy="89.3338"
//                           r="1.66667"
//                           transform="rotate(-90 132 89.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="74.6673"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 74.6673)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 31.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 31.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 31 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 31 31.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="31.0003"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 31.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 30.9998)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 30.9998)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 30.9998)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 30.9998)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 103 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 103 30.9998)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy="74.6668"
//                           r="1.66667"
//                           transform="rotate(-90 132 74.6668)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy="30.9998"
//                           r="1.66667"
//                           transform="rotate(-90 132 30.9998)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 31 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 31 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 103 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 103 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy="60.0003"
//                           r="1.66667"
//                           transform="rotate(-90 132 60.0003)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy="16.3333"
//                           r="1.66667"
//                           transform="rotate(-90 132 16.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 45.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="1.66667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 1.66667 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 45.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="16.3333"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 16.3333 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 31 45.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={31}
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 31 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="45.3333"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 45.3333)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="45.6667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 45.6667 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 45.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="60.3333"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 60.3333 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 45.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="88.6667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 88.6667 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 45.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="117.667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 117.667 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 45.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx="74.6667"
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 74.6667 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 103 45.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={103}
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 103 1.66683)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy="45.3338"
//                           r="1.66667"
//                           transform="rotate(-90 132 45.3338)"
//                           fill="#3056D3"
//                         />
//                         <circle
//                           cx={132}
//                           cy="1.66683"
//                           r="1.66667"
//                           transform="rotate(-90 132 1.66683)"
//                           fill="#3056D3"
//                         />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="w-full px-4 lg:w-1/2 xl:w-5/12"
//               variants={{
//                 visible: { opacity: 1, x: 0 },
//                 hidden: { opacity: 0, x: 50 },
//               }}
//               style={{ zIndex: 5 }}
//             >
//               <div className="mt-5 lg:mt-0 ml-2" style={{ zIndex: 5 }}>
//                 <h2 className="mb-5 text-3xl font-bold text-white dark:text-white sm:text-[40px]/[48px] flex justify-center">
//                   At Nirmaan, we Redefine Innovation.
//                 </h2>
//                 <p className="mb-5 text-base text-white dark:text-dark-6">
//                   We, at Nirmaan Hyperloop, aim to develop and innovate new
//                   modes of transport. Founded in 2018, now a team of 40 creative
//                   minds from various engineering domains, Nirmaan Hyperloop
//                   aimed to build a Globally recognizable Hyperloop pod.
//                 </p>
//                 <p className="mb-8 text-base text-white dark:text-dark-6">
//                   Our team aims to research the entire Hyperloop Ecosystem to
//                   bring this technology to reality as soon and as efficiently as
//                   possible.
//                 </p>
//               </div>
//               <motion.div className="flex justify-center" style={{ zIndex: 5 }}>
//                 <a
//                   href="About"
//                   className="bg-white text-black font-bold py-2 px-6 rounded-full"
//                   style={{ zIndex: 5 }}
//                 >
//                   <p style={{ zIndex: 5 }}></p>About Us
//                 </a>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section> */}
//     </>
//   );
// };

// export default About1;

"use client";
import Image from "next/image";
import React from "react";
import WobbleCard from "../components/ui/wobble-card";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        // containerClassName="col-span-1 lg:col-span-2  bg-pink-800 h-[100px] lg:min-h-[300px]"
        className="h-[500px]  justify-center  items-center flex flex-col p-0 m-0"
      >
         <Image
          src="/hlptemp.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="w-full "
         />
        <div className="max-w-xs p-5">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Innovation
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            At Nirmaan, we are on an unending journey to redefine innovation,
            continually pushing the boundaries day in, day out, to create a
            brighter future.
          </p>
        </div>
       
      </WobbleCard>
      <WobbleCard
        // containerClassName="col-span-1 lg:col-span-2  bg-pink-800 h-[100px] lg:min-h-[300px]"
        className="h-[500px]   justify-center  items-center flex flex-col p-0 m-0"
      >
         <Image
          src="/hlptemp.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="w-full "
         />
        <div className="max-w-xs p-5">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Innovation
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            At Nirmaan, we are on an unending journey to redefine innovation,
            continually pushing the boundaries day in, day out, to create a
            brighter future.
          </p>
        </div>
       
      </WobbleCard>
      {/* <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Engineering
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          As a group of dedicated engineers, we are firmly grounded in the
          relentless pursuit of excellence through top-tier engineering
          principles.
        </p>
      </WobbleCard> */}
      <WobbleCard containerClassName="col-span-1 min-w-[700px] lg:col-span-3  bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] ">
        <div className="max-w-sm mx-5 my-2">
          <h2 className="max-w-sm md:max-w-lg p-5 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            At Nirmaan, we Redefine Innovation.
          </h2>
          <p className="mt-4 max-w-[26rem]  text-left text-base/6 text-neutral-200">
            We at,Nirmaan Hyperloop, aim to develop and innovate new modes of
            transport. Founded in 2018, now a team of 40 creative minds from
            various engineering domains, Nirmaan Hyperloop aimed to build a
            Globally recognizable Hyperloop pod.
          </p>
        </div>
        <Image
          src="/aboutimg2.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

export default About;
