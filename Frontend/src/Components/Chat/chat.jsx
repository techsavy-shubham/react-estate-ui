import './chat.scss'
import { useState } from 'react';

function Chat(){
const [chat,setChat]=useState(true);

  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt='' />
                <span>John Doe</span>
                <p>Lorem ipsum dolor ....</p>
            </div>
            <div className="message">
                <img src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt='' />
                <span>John Doe</span>
                <p>Lorem ipsum dolor ....</p>
            </div>
            <div className="message">
                <img src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt='' />
                <span>John Doe</span>
                <p>Lorem ipsum dolor ....</p>
            </div>
            <div className="message">
                <img src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt='' />
                <span>John Doe</span>
                <p>Lorem ipsum dolor ....</p>
            </div>
        </div>
        {chat && (<div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png' alt=''/>
                <span>John Doe</span>
                </div>
                <button onClick={()=>setChat(null)}>X</button>
            </div>
            <div className="center">
                <div className="chatMessage own">
                    <p>Lorem, ipsum dolor sit .....</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem, ipsum dolor sit .....</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem, ipsum dolor sit .....</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem, ipsum dolor sit .....</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem, ipsum dolor sit .....</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem, ipsum dolor sit .....</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
               <button>Send</button>
            </div>
        </div>)}
    </div>
  )
}

export default Chat