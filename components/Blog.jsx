import Image from 'next/image';

export const Blog = ({ Data }) => (
  <div className="bg-black h-full text-white ">
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="mt-10 grid grid-cols-1 gap-8 md:w-[48rem] xl:w-[65rem] w-96 ">
          <div className="w-full border border-purple-500  overflow-hidden flex ">
            <div className="-500 w-[40%] md:w-[24rem] xl:w-[32rem] h-full ">
              <Image
                className="overflow-hidden w-100 object-cover h-full"
                src={Data.image}
                alt=""
                width={500} // Replace with the actual width of the image
                height={300}
                key={Data.image}
              />
            </div>
            <div className=" bg-transparent p-3 w-[60%]">
              <div className="flex flex-col  justify-start items-start">
                <div className="text-[8px] md:text-xs hover:text-purple-500">
                  {Data.location}
                </div>
                <div className=" text-[8px] md:text-xs hover:text-purple-500">
                  {Data.date}
                </div>
                <div className=" text-base md:text-2xl font-semibold mt-4  hover:text-purple-500  ">
                  {Data.title}
                </div>
              </div>

              <div className="text-xs md:text-sm hover:text-purple-500">
                {Data.desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
