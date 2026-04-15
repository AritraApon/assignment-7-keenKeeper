import Link from "next/link";
import Chart from "../components/Charts/Chart";

 export const metadata = {
  title: "Activity Stats | KeenKeeper",
  description: "Visualize your social interactions. Analyze how much time you spend on calls, texts, and video chats with your friends.",
};
const StatsPage = () => {
    return (
        <div className="py-10 bg-[#f8fafc]">
            <div className="w-11/12 lg:w-8/12 mx-auto  ">
                <h1 className="text-3xl md:text-5xl font-bold">Friendship Analytics</h1>
                <div className="shadow  mt-10 py-10 bg-gray-200 ">
                    <h1 className=" font-extrabold px-5 pb-5 text-xl">By Interaction Type</h1>
                    <Chart />
                </div>
                 <div className='flex justify-center my-10'>
                <Link href={'/'}><button className='btn btn-primary'>  Back</button></Link>
            </div>
            </div>
        </div>

    );
};

export default StatsPage;