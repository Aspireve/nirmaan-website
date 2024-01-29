import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import blogsData from "./blogcon";

const page = ({params}) => {
    const blogItem = blogsData[params.BlogId-1];
  return (
    <>  
        <div className=" bg-black">
        <Navbar />
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
                        <img className="w-[54rem] m-5 mx-28" src={`${blogItem.img}`} alt="" />
                    </div>
            </div>
        </div>
        <Footer/>
        </div>
    </>
  )
}

export default page