import React from 'react'

const WobbleCard = () => {
  return (
    <div className="grid  bg-black grid-cols-1 p-5 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
        <div className=' cards col-span-2  text-white  flex flex-col lg:col-span-1 md:div-span-1 sm:col-span-2 rounded-lg  h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'>
           <div className='h-[440px] rounded-t-lg' style={{backgroundImage:'url(https://www.nirmaanhyperloop.com/_next/image?url=%2Faboutimg1.jpg&w=640&q=75)',backgroundPosition:'center',backgroundSize:'cover'}} ></div>
            <div className='p-5 flex flex-col textCard h-1/2 '><h1 className='font-bold'>Innovation</h1>
            <p> At Nirmaan, we are on an unending journey to redefine innovation, continually pushing the boundaries day in, day out, to create a brighter future.
            </p>
            </div>
        </div>       <div className=' cards col-span-2  text-white  flex flex-col lg:col-span-1 md:div-span-1 sm:col-span-2 rounded-lg  h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'>
           <div className='h-[440px] rounded-t-lg' style={{backgroundImage:'url(https://www.nirmaanhyperloop.com/_next/image?url=%2Faboutimg1.jpg&w=640&q=75)',backgroundPosition:'center',backgroundSize:'cover'}} ></div>
            <div className='p-5 textCard flex  flex-col  h-1/2 '><h1 className='font-bold'>Engineering</h1>
            <p>         As a group of dedicated engineers, we are firmly <br/> grounded in the  relentless pursuit of excellence through top-tier engineering principles.
            </p>
            </div>
        </div>

        <div id='card-3' className='h-[440px] overflow-hidden cards col-span-2 text-white flex flex-col-reverse  md:col-span-2 sm:col-span-2 lg:flex-row md:flex-row sm:flex-col-reverse lg:col-span-2 rounded-lg   bg-pink-800 min-h-[500px] lg:min-h-[300px]'>
            <div className='w-full h-1/2 lg:w-1/2 md:w-1/2 sm:w-full flex flex-col justify-center items-left mt-0 lg:mt-20 md:mt-20 sm:mt-0 p-5'>      <h1 className='font-bold'>      At Nirmaan, we Redefine Innovation.</h1>
            <p>            We at,Nirmaan Hyperloop, aim to develop and innovate new modes of transport. Founded in 2018, now a team of 40 creative minds from various engineering domains, Nirmaan Hyperloop aimed to build a Globally recognizable Hyperloop pod.
            </p>
            </div>
            <div className='w-full lg:w-1/2  md:w-1/2 sm:w-full h-1/2 lg:h-full sm:h-1/2 md:h-full' style={{backgroundImage:'url(https://www.nirmaanhyperloop.com/dom-electronics.jpeg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        </div>

    </div>
  )
}

export default WobbleCard