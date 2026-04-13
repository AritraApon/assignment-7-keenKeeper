import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#244d3f] pt-20 mt-10">
            <div className="text-center space-y-5">
                <h1 className="text-3xl lg:text-6xl font-bold text-gray-100">KeenKeeper</h1>
                <p className="text-gray-300">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <div>
                <h1 className="text-center text-gray-100 mt-4 text-xl font-bold">Social Links</h1>
                <div className="flex  justify-center gap-4 mt-4">
                    <p className="w-10 h-10 bg-white rounded-full text-2xl flex justify-center items-center"><FaInstagramSquare /></p>
                    <p className="w-10 h-10 bg-white rounded-full text-2xl flex justify-center items-center"><FaFacebook /></p>
                    <p className="w-10 h-10 bg-white rounded-full text-2xl flex justify-center items-center"><FaSquareXTwitter /></p>
                </div>
                <div className="shadow-3xl border-t border-green-950  mt-10 py-5 flex flex-col lg:flex-row text-gray-400 justify-between gap-5 px-6">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-5 flex-col lg:flex-row">
                        <p>Privacy Policy                    </p>
                        <p>
                            Terms of Service
                        </p>
                        <p>
                            Cookies
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;