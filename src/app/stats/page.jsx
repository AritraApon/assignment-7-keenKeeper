import Chart from "../components/Charts/Chart";


const StatsPage = () => {
    return (
        <div className="py-10 bg-[#f8fafc]">
            <div className="w-11/12 lg:w-8/12 mx-auto  ">
                <h1 className="text-2xl md:text-5xl font-bold">Friendship Analytics</h1>
                <div className="shadow  mt-10 py-10 bg-gray-200 ">
                    <h1 className="fond-bold px-5 text-xl">By Interaction Type</h1>
                    <Chart />
                </div>
            </div>
        </div>

    );
};

export default StatsPage;