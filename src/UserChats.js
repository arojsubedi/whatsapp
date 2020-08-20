import React,{useState,useEffect} from 'react';
import './UserChats.css';
import {Avatar} from '@material-ui/core';
function UserChats() {
    const [seed,setSeed]=useState('')
    useEffect(() => {
        setSeed(Math.random(1,5000))
      },[]);
    return (
        <div className="userChats">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <h5>Room Name</h5>
            <h5>Last message</h5>
        </div>
    )
}

export default UserChats
