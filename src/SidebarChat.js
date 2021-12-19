import React from 'react'
import './SidebarChat.css'
import {Avatar} from "@material-ui/core";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>chat convo</h2>
                <p>hi hello</p>
            </div>
        </div>
    )
}

export default SidebarChat
