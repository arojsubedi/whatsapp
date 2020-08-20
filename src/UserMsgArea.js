import React,{useState,useEffect} from 'react';
import './UserMsgArea.css';
import {Avatar,IconButton} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function UserMsgArea() {
    const [seed,setSeed] = useState('')

    useEffect(()=>{
        setSeed(Math.random(1,5000))
    },[]);

    return (
        <div className="usermsgarea">
            <div className="usermsgarea__userinfo">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className = "usermsgarea__info">
                    <h5>username</h5>
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
                <div className="usermsgarea__chatmsg">
                    <span className="chatmsg__username">username</span>
                    <span className="chatmsg__msgbody">chat msggg</span>
                    <span className="chatmsg__timestamp">timestamp</span>
                </div>

            </div>
            <div className="usermsgarea__footer">

            </div>
            
        </div>
    )
}

export default UserMsgArea
