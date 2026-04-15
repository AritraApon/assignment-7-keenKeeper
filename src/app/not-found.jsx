import Link from "next/link";
import Home from "./page";
import Image from "next/image";


const NotFoundPage = () => {
    return (
        <div>
            <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-6 py-12">

                <div className="relative w-full max-w-lg mb-12">

                    <Image
                        src="/404Image-removebg-preview.png"
                        alt="KeenKeeper 404 - Lost Connection"
                        width={600}
                        height={600}
                        className="mx-auto"
                        priority={true}
                    />
                </div>


                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent mb-6">
                    Uh Oh! Connection Lost.
                </h1>
                <p className="text-xl text-gray-600 max-w-xl mb-12">
                    Even the best keepers lose track sometimes. The page you are looking for has gone offline or doesn't exist.
                </p>


                <Link href="/">
                    <button className="btn btn-primary gap-2 text-white px-8 h-16 rounded-2xl text-lg shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40">
                        <Home size={22} className="opacity-80" />
                        Go to Home
                    </button>
                </Link>

                {/* Optional: Short footer info */}
                <div className="fixed bottom-6 text-gray-400 text-xs">
                    © {new Date().getFullYear()} KeenKeeper. Keep Tracking, Keep Keeping.
                </div>
            </main>
        </div>
    );
};

export default NotFoundPage;