import React,{useState,useEffect} from 'react';
import './UserChats.css';
import {Avatar} from '@material-ui/core';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './Firebase';
import {Link} from 'react-router-dom';

function UserChats({addNewChat,id,name}) {
    const [seed,setSeed]=useState('')
    const [newChatRoom,setNewChatRoom]=useState('')
    const [showModal, setShowModal] = useState(false);

    const createNewChat = (e) =>{
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(!showModal)
    };

    const addNewChatToDB=(e)=>{
        db.collection('rooms').add({
            name:newChatRoom
        })
        setShowModal(!showModal)
        setNewChatRoom('')
    }

    useEffect(() => {
        setSeed(Math.random(1,5000))
      },[]);

    return !addNewChat?(
        <Link to={`/room/${id}/${seed}`}>
            <div className="userChats">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="userChats__namemsg">
                    <h5>{name}</h5>
                    <h6>Last message...</h6>
                </div>
            </div>
        </Link>
        
        ):
            (
            <div>
                <div onClick={(e)=>{createNewChat(e)}} className="userChats">
                    <div className="userChats__newChat">
                        <h5>Add new chat</h5>
                    </div>   
                </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Create a room</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <input
                            id="new__chat"
                            name="new__chat"
                            placeholder="Enter a name for the room"
                            value={newChatRoom}
                            onChange={(e)=>{setNewChatRoom(e.target.value)}}
                        />
                  </Modal.Body>
                  <Modal.Footer>
                      <button onClick={(e)=>{addNewChatToDB(e)}}>Create</button>
                  </Modal.Footer>
                  
                </Modal>
            </div>
            
    )
}

export default UserChats;
