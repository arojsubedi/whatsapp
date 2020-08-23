import React,{useState,useEffect} from 'react';
import './UserMsgArea.css';
import {Avatar,IconButton} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from './Firebase.js';
import { useParams } from 'react-router-dom';

function UserMsgArea() {
    const [seed,setSeed] = useState('')
    const [msg,setMsg] = useState('')
    const {roomId} = useParams()
    const [roomName,setRoomName]=useState('')
    useEffect(()=>{
        
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>{
                setRoomName(snapshot.data().name)
            })
        }
    },[roomId])

    useEffect(()=>{
        setSeed(Math.random(1,5000))
    },[]);

     const sendMsg = (e)=>{
         e.preventDefault();
         alert(msg)
         setMsg("")
     }

    return (
        <div className="usermsgarea">
            <div className="usermsgarea__userinfo">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className = "usermsgarea__info">
                    
                    <h5>{roomName}</h5>
                    <h6>last seen at</h6>
                </div>
                <div className="usermsgarea__icons">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>   
                </div>
            </div>
            <div className="usermsgarea__msg">
                <div className="usermsgarea__chatmsg">
                    <p>
                        <span className="chatmsg__username">username</span>
                        chat msggg
                        <span className="chatmsg__timestamp">timestamp</span>
                    </p>
                </div>
                <div className={`usermsgarea__chatmsg ${true} usrmsgarea__recvrchatmsg`}>
                    <p>
                        <span className="chatmsg__username">username</span>
                        chat msggg
                        <span className="chatmsg__timestamp">timestamp</span>
                    </p>
                </div>

            </div>
            <div className="usermsgarea__footer">
                <InsertEmoticonIcon />
                <form className="enter__msg">
                    <input
                        id="enter__msg"
                        name = "enter__msg"
                        placeholder="Type a message"
                        value={msg}
                        onChange={(e)=>{setMsg(e.target.value)}}
                    />
                    <button type="submit" onClick={(e)=>{sendMsg(e)}}>send msg</button>
                </form>
                <MicIcon />
            </div>
            
        </div>
    )
}

export default UserMsgArea
