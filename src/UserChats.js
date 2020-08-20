import React,{useState,useEffect} from 'react';
import './UserChats.css';
import {Avatar} from '@material-ui/core';
function UserChats({addNewChat}) {
    const [seed,setSeed]=useState('')

    const createNewChat = () =>{
        const userVal = prompt("Search for a user")
    }
    useEffect(() => {
        setSeed(Math.random(1,5000))
      },[]);

    return !addNewChat?(
        <div className="userChats">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="userChats__namemsg">
                <h5>Room Name</h5>
                <h6>Last message...</h6>
            </div>
            
        </div>):
            (<div onClick={createNewChat} className="userChats">
                <div className="userChats__newChat">
                    <h3>Add new chat</h3>
                </div>
        </div>
    )
}

export default UserChats
