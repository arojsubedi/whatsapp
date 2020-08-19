import React from 'react';
import './AppUserArea.css';
import {Avatar,IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function AppUserArea() {
    return (
        <div className="appusrarea__content">
            <div className="appusrarea__heading">
                <Avatar>H</Avatar>
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

            </div>
            <div className="appusrarea__chats">

            </div>
        </div>
    )
}

export default AppUserArea


