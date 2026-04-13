import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCards = ({friend}) => {

    const {name,tags,picture,status , days_since_contact } = friend ;

    return (
        <div>
            <Link href={`/${friend.id}`}>
             <div className="card bg-base-100  shadow-lg rounded-2xl hover:scale-105 transition duration-100 hover:shadow-green-200">
                <figure className="px-10 pt-10">

                    <div className="avatar">
                        <div className="w-24 rounded-full">

                            <Image  src={picture} alt={name} width={100} height={100} />
                        </div>
                        </div>

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{days_since_contact}d ago  </p>
                    <div className='flex gap-3'>
                        {
                          tags.map((tag,index)=>
                             <div key={index} className=' bg-green-200 py-1 px-2 shadow rounded-2xl text-green-800'> {tag} </div>
                        )
                        }
                    </div>
                    <div className={`${status === "overdue" ? 'bg-red-600 ' : status==="almost due" ? 'bg-yellow-600  ' : status ==='on-track' ? 'bg-green-800 ' :'' } py-1 px-2 shadow rounded-2xl text-white mt-4`}>

                 {status}
                    </div>
                </div>
            </div>
            </Link>

        </div>
    );
};

export default FriendCards;