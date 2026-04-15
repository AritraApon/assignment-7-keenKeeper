import Link from 'next/link';


const FriendNotFound = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-4">
                <h1 className="text-4xl font-bold text-red-500">404</h1>
                <p className="text-xl font-medium">Friend not found</p>

                <Link href="/">
                    <button className="btn btn-primary">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FriendNotFound;