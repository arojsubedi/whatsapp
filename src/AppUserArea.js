import React,{useState,useEffect} from 'react';
import './AppUserArea.css';
import UserChats from './UserChats';
import {Avatar,IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import db from "./Firebase.js";
import {useStateValue} from './StateProvider';


function AppUserArea() {

    const [rooms,setRooms] = useState([])
    const [searchedChat,setSearchedChat]=useState('')
    const [{user},dispatch] = useStateValue();

    
    useEffect(() => {
       const unsubscribe = db.collection('rooms').onSnapshot(snapshot=>{
           setRooms(snapshot.docs.map(doc=>({
               id:doc.id,
               rooms:doc.data()
           })))
       })
       return()=>{
           unsubscribe()
       }
    }, [])
    return (
        <div className="appusrarea__content">
            <div className="appusrarea__heading">
            <Avatar src={user?.photoURL}/>
                <div className="appusrarea__icons">
                    <IconButton>
                        <DonutLargeIcon color="disabled"/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon color="disabled"/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon color="disabled"/>
                    </IconButton>
                </div>
            </div>
            <div className="appusrarea__search">
                <div className="appusrarea__searchicons">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input 
                        id="search__option"
                        name="search__option"
                        placeholder="search chat"
                        className="search__input"
                        value={searchedChat}
                        onChange={(e)=>setSearchedChat(e.target.value)}
                    />
                </div>
                
            </div>
            <div className="appusrarea__chats">
                    <UserChats addNewChat />
                    {  
                        rooms.map((room)=>{
                            if(searchedChat== '')
                                return <UserChats key={room.id} id={room.id} name={room.rooms.name}/>
                            else{
                                if(room.rooms.name.indexOf(searchedChat)>-1)
                                    return <UserChats key={room.id} id={room.id} name={room.rooms.name}/>
                            }
                        })
                    }
            </div>
        </div>
    )
}

export default AppUserArea


