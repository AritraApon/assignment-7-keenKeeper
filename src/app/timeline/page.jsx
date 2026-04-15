import Link from "next/link";
import TimeLine from "../components/TimeLine/TimeLine";


const TimeLinePage = () => {
    return (
        <div className=" min-h-screen py-10 bg-[#f8fafc]">
            <h1 className="text-2xl lg:text-4xl font-bold  w-11/12 lg:w-8/12 mx-auto">TimeLine</h1>
      <TimeLine/>
       <div className='flex justify-center my-10'>
                <Link href={'/'}><button className='btn btn-primary'>  Back</button></Link>
            </div>
        </div>
    );
};

export default TimeLinePage;