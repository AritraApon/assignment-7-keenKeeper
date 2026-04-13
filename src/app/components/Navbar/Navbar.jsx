'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGripLines } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";


const Navbar = () => {
    const pathName = usePathname()
    return (
        <div className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-3 px-4">
                <div className="flex lg:hidden justify-around gap-5">
                    {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                    {/* For TSX uncomment the commented types below */}
                    <button className="btn btn-success" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        <FaGripLines />
                    </button>

                    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                        <li><Link href={'/'}><button className={`btn ${pathName === '/' ? 'bg-green-700 text-white ' : ''}  flex items-center gap-2 bg-gray-300 text-black `}>
                            <IoMdHome />Home</button></Link></li>
                        <li> <Link href={'/timeline'}><button className={`btn ${pathName === '/timeline' ? 'bg-green-700 text-white' : ''}  flex items-center gap-2 bg-gray-300 text-black`}>
                            <IoTimeOutline />TimeLine</button>
                        </Link></li>
                        <li>
                            <Link href={'/stats'}><button className={`btn ${pathName === '/stats' ? 'bg-green-700 text-white' : ''}  flex items-center gap-2 bg-gray-300 text-black`}>
                                <TfiStatsUp />Stats</button>
                            </Link>
                        </li>

                    </ul>
                    <h1 className="font-bold text-2xl  ">Keen<span className="text-green-800">Keeper</span></h1>
                </div>

                     <h1 className="font-bold text-2xl hidden lg:flex ">Keen<span className="text-green-800">Keeper</span></h1>


                <div className="hidden  lg:flex flex-col lg:flex-row gap-3 ">
                    <Link href={'/'}><button className={`btn ${pathName === '/' ? 'bg-green-700 text-white ' : ''}  flex items-center gap-2 bg-gray-300 text-black `}>
                        <IoMdHome />Home</button>
                    </Link>
                    <Link href={'/timeline'}><button className={`btn ${pathName === '/timeline' ? 'bg-green-700 text-white' : ''}  flex items-center gap-2 bg-gray-300 text-black`}>
                        <IoTimeOutline />TimeLine</button>
                    </Link>
                    <Link href={'/stats'}><button className={`btn ${pathName === '/stats' ? 'bg-green-700 text-white' : ''}  flex items-center gap-2 bg-gray-300 text-black`}>
                        <TfiStatsUp />Stats</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;