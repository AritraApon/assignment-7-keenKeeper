import { IoMdText, IoMdVideocam } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";


const Button = () => {
    return (
        <div className="flex gap-3">
            <button className="btn py-15 px-20 text-2xl flex flex-col justify-center">  <span> <MdWifiCalling3 /></span>  Call</button>
            <button className="btn py-15 px-20 text-2xl flex flex-col justify-center">  <span> <IoMdText/></span>  Text</button>
            <button className="btn py-15 px-20 text-2xl flex flex-col justify-center">  <span> <IoMdVideocam /></span>  Video</button>
        </div>
    );
};

export default Button;