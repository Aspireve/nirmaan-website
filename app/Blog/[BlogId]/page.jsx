import Image from 'next/image';
import Footer from '../../../components/Footer';
import blogsData from './blogcon';

const page = ({ params }) => {
  const blogItem = blogsData[params.BlogId - 1];
  return (
    <div className="relative" style={{ zIndex: 99999 }}>
      <div className="flex justify-center w-screen m-2">
        <div className=" border py-4 border-purple-300    w-[68rem] text-white">
          <div className="flex flex-col px-40">
            <div className=" text-5xl">{`${blogItem.title}`}</div>
            <div className="flex py-4">
              <div className=" text-sm">{`${blogItem.location}`}</div>
              <div className=" text-sm px-2">{`${blogItem.date}`}</div>
            </div>
            <div className=" text-2xl">{`${blogItem.desc}`}</div>
          </div>
          <div>
            <Image
              className="w-[54rem] m-5 mx-28 object-cover"
              src={blogItem.img}
              alt=""
              width={864} // Replace with actual width
              height={486} // Add this if the image is critical
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
