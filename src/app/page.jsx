import Image from "next/image";
import Banner from "./components/Banner/Banner";
import FriendsJson from '../../public/friends.json'
import FriendCards from "./components/UI/Friend Card/FriendCards";

export default function Home() {
  return (
    <>
    <div className="bg-[#f8fafc] min-h-screen ">
      <Banner/>
      <div className="w-11/12 mx-auto ">
        <h1 className="text-3xl font-bold">Your Friends</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
              FriendsJson.map(friend => <FriendCards key={friend.id} friend={friend}  />)
            }
        </div>
      </div>
    </div>
    </>
  );
}
