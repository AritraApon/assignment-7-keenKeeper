'use client'
import { FriendContext } from "@/Contexts/FriendsProvider";
import { useContext } from "react";
import { IoMdText, IoMdVideocam } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { toast } from "react-toastify";


const Button = ({friends}) => {
    const { timeLine , setTimeLine} =useContext(FriendContext)
    const handleCallTextVideo = (type) => {
        const addFriends = {
            ...friends,
            activityType: type,
            timestamp: new Date().toLocaleDateString('en-GB')
        }
        setTimeLine([...timeLine ,addFriends])
        toast.success(` ${addFriends.name}  ${type} ${new Date().toLocaleDateString('en-GB')} `)

    }
    console.log(timeLine)
    return (
        <div className="flex flex-col lg:flex-row gap-3">
            <button onClick={()=>handleCallTextVideo('call')}
            className={`btn py-15 px-20 text-2xl flex flex-col justify-center`}>
             <span> <MdWifiCalling3 /></span>
               Call</button>

            <button onClick={()=>handleCallTextVideo('text')} className="btn py-15 px-20 text-2xl flex flex-col justify-center">  <span> <IoMdText/></span>  Text</button>

            <button onClick={()=>handleCallTextVideo('video')} className="btn py-15 px-20 text-2xl flex flex-col justify-center">  <span> <IoMdVideocam /></span>  Video</button>
        </div>
    );
};

export default Button;