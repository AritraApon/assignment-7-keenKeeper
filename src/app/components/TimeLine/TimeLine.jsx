'use client'
import { FriendContext } from "@/Contexts/FriendsProvider";
import Image from "next/image";
import { useContext } from "react";


const TimeLine = () => {
    const { timeLine, setTimeLine } = useContext(FriendContext)
    return (
        <div className="mt-10 w-11/12 lg:w-8/12 mx-auto">
            <div className="space-y-3">
                { timeLine.length === 0 ? <div><div className="text-center py-10 border-2 border-dashed text-3xl border-gray-200 rounded-xl">
      <p className="text-gray-400">No calls or messages yet.</p>
    </div></div> :
                    timeLine.map((items, index) => <div key={index}>

                        <div className="flex items-center gap-3  p-2 bg-gray-200 rounded-xl shadow px-4 ">
                            <div>
                                {items.activityType === 'call' &&
                              <Image src='/call.png' alt="call" width={30} height={30} />
                                }
                                {items.activityType === 'text' &&  <Image src='/text.png' alt="call" width={30} height={30} />}

                                {items.activityType === 'video' &&  <Image src='/video.png' alt="call" width={30} height={30} />}
                            </div>
                            <div>
                                <h1 className="text-xl fond-bold"> <span className="font-bold">{items.activityType}</span> with {items.name} </h1>
                            <p>{items.timestamp}</p>
                            </div>

                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default TimeLine;