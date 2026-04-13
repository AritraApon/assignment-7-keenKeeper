

const Banner = () => {
    return (
        <div className="py-10">
            <div className="text-center space-y-5">
                <h1 className="text-3xl lg:text-6xl font-semibold">Friends to keep close in your life</h1>
                <p className="text-gray-500">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                    <button className="btn bg-green-800 text-white">+ Add a friend</button>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center mt-10">
                <div className="shadow-xl text-center rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 hover:bg-green-100 hover:border-green-400">
                    <h1 className="text-2xl font-semibold text-green-800">08</h1>
                    <p className="text-gray-500">Total Friend</p>
                </div>
                <div className="shadow-xl text-center rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 hover:bg-green-100 hover:border-green-400">
                    <h1 className="text-2xl font-semibold text-green-800">03</h1>
                    <p className="text-gray-500">On Track</p>
                </div>
                <div className="shadow-xl text-center rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 hover:bg-green-100 hover:border-green-400">
                    <h1 className="text-2xl font-semibold text-green-800">06</h1>
                    <p className="text-gray-500">Need Attention</p>
                </div>
                <div className="shadow-xl text-center rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 hover:bg-green-100 hover:border-green-400">
                    <h1 className="text-2xl font-semibold text-green-800">12</h1>
                    <p className="text-gray-500">Interactions This Month</p>
                </div>
            </div>
            <div className= " w-10/12 mx-auto divider mt-10"></div>
        </div>
    );
};

export default Banner;