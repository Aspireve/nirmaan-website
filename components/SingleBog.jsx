

const SingleBog = ({Data}) => {
  return (
    <>
    <div className="flex justify-center w-screen">
            <div className=" border py-4 border-purple-300    w-[68rem] text-white">
                <div className="flex flex-col px-40">
                    <div className=" text-5xl">{`${Data.title}`}</div>
                    <div className="flex py-4">
                        <div className=" text-sm">{`${Data.location}`}</div>
                        <div className=" text-sm px-2">{`${Data.date}`}</div>
                    </div>
                    <div className=" text-2xl">{`${Data.desc}`}</div>
                    
                </div>
                <div>
                        <img className="w-[54rem] m-5 mx-28" src={`${Data.img}`} alt="" />
                    </div>
            </div>
        </div>
    </>
  )
}

export default SingleBog