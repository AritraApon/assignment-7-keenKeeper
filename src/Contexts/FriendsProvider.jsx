'use client'
import React, { createContext, useState } from 'react';

export const FriendContext = createContext()
const FriendsProvider = ({children}) => {
    const [timeLine , setTimeLine] = useState([])
    const data ={
       timeLine , setTimeLine
    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default FriendsProvider;