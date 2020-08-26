import React, { useState, useEffect } from 'react';
import './UserMsgArea.css';
import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from './Firebase.js';
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import * as firebase from 'firebase/app';
import useWhatsapp from './static/images/useWhatsapp.PNG';

function UserMsgArea() {
    // const [seed,setSeed] = useState('')
    const [msg, setMsg] = useState('')
    const { roomId } = useParams()
    const { seed } = useParams()
    const [roomName, setRoomName] = useState('')
    const [messages, setMessage] = useState([])
    const [{ user }, dispatch] = useStateValue();


    useEffect(() => {

        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => {
                    setMessage(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
                })
        }
    }, [roomId])

    // useEffect(()=>{
    //     setSeed(Math.random(1,5000))
    // },[]);

    const sendMsg = (e) => {
        e.preventDefault();
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                name: user.displayName,
                message: msg,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        setMsg("")
    }
    const setLocalDate=(msgUTCDate)=>{
        let date=new Date(msgUTCDate);
        return date.toString();
    }

    return (
        (roomId!=null && roomId !=undefined)?
            <div className="usermsgarea">
                <div className="usermsgarea__userinfo">
                    <IconButton>
                        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                    </IconButton>
                    <div className="usermsgarea__info">
                        <h5>{roomName}</h5>
                        {/* {messages.length!== 0 ?setLocalDate(new Date(messages[0].message.timestamp?.toDate()).toUTCString()):''} */}
                        <h6>{messages.length !== 0 ? 'Last sent' : ''} {" "}{(messages.length !== 0) ? 
                                setLocalDate(new Date(messages[0].message.timestamp?.toDate()).toUTCString())
                            : ''}
                            </h6>
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
                    {messages.map(({id,message}) => (
                        <p key={id} className={`usermsgarea__chatmsg ${message.name==user?.displayName && "usrmsgarea__recvrchatmsg"}`}>
                            <span className="chatmsg__username">{message.name}</span>
                            {message.message}
                            <span className="chatmsg__timestamp">{setLocalDate(new Date(messages[0].message.timestamp?.toDate()).toUTCString())}</span>
                        </p>
                    ))}

                </div>
                <div className="usermsgarea__footer">
                    <InsertEmoticonIcon />
                    <form className="enter__msg">
                        <input
                            id="enter__msg"
                            name="enter__msg"
                            placeholder="Type a message"
                            value={msg}
                            onChange={(e) => { setMsg(e.target.value) }}
                        />
                        <button type="submit" onClick={(e) => { sendMsg(e) }}>send msg</button>
                    </form>
                    <MicIcon />
                </div>

            </div>:
            <div className="usermsgarea">
                <img src={useWhatsapp}
                alt="Use Whatsapp"
                className=" img-fluid" />
            </div>
    )
}

export default UserMsgArea
