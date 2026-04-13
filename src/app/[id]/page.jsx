
import Image from 'next/image';
import friendData from '../../../public/friends.json'
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { FiArchive } from 'react-icons/fi';
import Button from '../components/Button/Button';
import Link from 'next/link';

const FriendsDetails = async ({ params }) => {
    const { id } = await params;
    const friends = friendData.find(friend => friend.id === parseInt(id));
    const { name, tags, picture, status, days_since_contact, bio, email ,goal,next_due_date } = friends ;
    return (
        <div className='min-h-screen pt-10 bg-[#f8fafc] px-4'>

            <div className='flex flex-col lg:flex-row justify-center gap-6'>
                <div>
                    <div>
                        <div className="card bg-base-100  shadow-lg rounded-2xl ">
                            <figure className="px-10 pt-10">

                                <div className="avatar">
                                    <div className="w-24 rounded-full">

                                        <Image src={picture} alt={name} width={100} height={100} />
                                    </div>
                                </div>

                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>{days_since_contact}d ago  </p>
                                <div className='flex gap-3'>
                                    {
                                        tags.map((tag, index) =>
                                            <div key={index} className=' bg-green-200 py-1 px-2 shadow rounded-2xl text-green-800'> {tag} </div>
                                        )
                                    }
                                </div>
                                <div className={`${status === "overdue" ? 'bg-red-600 ' : status === "almost due" ? 'bg-yellow-600  ' : status === 'on-track' ? 'bg-green-800 ' : ''} py-1 px-2 shadow rounded-2xl text-white mt-4`}>

                                    {status}
                                </div>
                                <div>
                                    <p className='text-gray-400'>{bio}</p>
                                </div>
                                <div className='text-gray-400'>
                                    Email : {email}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2 mt-5'>
                        <div className=' shadow-lg rounded-lg w-full  py-7  font-bold hover:bg-gray-300 btn'>
                            <p className='flex items-center justify-center gap-2'> <RiNotificationSnoozeLine />   Snooze 2 weeks</p>

                        </div>
                        <div className=' shadow-lg rounded-lg w-full  py-7  font-bold hover:bg-gray-300 btn'>
                            <p className='flex items-center justify-center gap-2'> <FiArchive />  Archive</p>

                        </div>
                        <div className=' shadow-lg rounded-lg w-full py-7  font-bold hover:bg-gray-300 btn'>
                            <p className='flex items-center justify-center gap-2 text-red-500'> <RiDeleteBin5Line /> Delete</p>

                        </div>

                    </div>
                </div>

                {/* 2nd part */}
                <div>
                    <div className='space-y-10'>
                        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center  ">
                            <div className="shadow-lg text-center rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 hover:bg-green-100 hover:border-green-400">
                                <h1 className="text-2xl font-semibold text-green-800">{days_since_contact}</h1>
                                <p className="text-gray-500">Days Since Contact</p>
                            </div>
                            <div className="shadow-lg text-center rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 hover:bg-green-100 hover:border-green-400">
                                <h1 className="text-2xl font-semibold text-green-800">{goal}</h1>
                                <p className="text-gray-500">Goal (Days)</p>
                            </div>
                            <div className="shadow-lg text-center rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 hover:bg-green-100 hover:border-green-400">
                                <h1 className="text-2xl font-semibold text-green-800">{next_due_date}</h1>
                                <p className="text-gray-500">Next Due</p>
                            </div>

                        </div>
                         <div className="shadow-lg  rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 mt-5 hover:bg-green-100 hover:border-green-400 space-y-5">
                            <div className='flex justify-between items-center'>
                              <h1 className="text-xl font-semibold text-green-800">Relationship Goal</h1>
                              <button className='btn'>Edit</button>
                            </div>
                                <p className="text-gray-500">Connect every {goal} days</p>
                            </div>

                            {/* button  */}
                         <div className="shadow-lg  rounded-2xl py-8 px-5 bg-gray-200 transition duration-300 mt-5 hover:bg-green-100 hover:border-green-400 space-y-3">
                            <div className='flex justify-between items-center'>
                              <h1 className="text-xl font-semibold text-green-800">Quick Check-In</h1>
                            </div>
                           <Button friends={friends} />

                            </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center my-10'>
                <Link href={'/'}><button className='btn btn-primary'>  Back</button></Link>
            </div>
        </div>
    );
};

export default FriendsDetails;