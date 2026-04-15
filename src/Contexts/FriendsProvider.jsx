'use client'
import React, { createContext, useState } from 'react';

export const FriendContext = createContext()
const FriendsProvider = ({children}) => {
    const [timeLine , setTimeLine] = useState([]);
    const [filter, setFilter] = useState('all');

     const filteredData = timeLine.filter(item => {
        if (filter === 'all') return true;
        return item.activityType === filter;
    })

    
    const data ={
       timeLine , setTimeLine,
       filter, setFilter ,filteredData
    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default FriendsProvider;