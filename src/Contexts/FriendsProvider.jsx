'use client'
import React, { createContext, useState } from 'react';

export const FriendContext = createContext()
const FriendsProvider = ({children}) => {
    const [timeLine , setTimeLine] = useState([]);
    const [filter, setFilter] = useState('all')
    const data ={
       timeLine , setTimeLine,
       filter, setFilter
    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default FriendsProvider;