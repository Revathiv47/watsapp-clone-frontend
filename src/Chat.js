import React, {useState} from 'react'
import './chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios";

function Chat({messages}) {

    const [input, setInput] = useState(" ");

    const sendMessage = async (e) => {
        e.preventDefault();

    await axios.post("/messages/new", {
        message: input,
        name: "Demo app",
        timestamp: "just now",
        received:false
    });

    setInput("")
}; 

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo" >
                    <h3>watsapp group</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                <IconButton >
                < SearchIcon />
                    </IconButton >
                    <IconButton >
                    < AttachFileIcon/>
                    </IconButton >
                <IconButton >
                   < MoreVertIcon />
                    </IconButton >
                </div>
            
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                     <p className={`chat__message ${message.received && "chat__receiver"}`}>
                     <span className="chat__name">{message.name}</span>
                     {message.message}
                     <span className="chat__timestamp">{message.timestamp} </span>
                     
                     </p>
                ))
                
                }
                
                   
            </div>
            <div className="chat__footer">
                <SentimentSatisfiedIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
