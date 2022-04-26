import React from 'react'
import './chatListItem.css'

export const ChatListItem = ({onClick, active, data}) => {
    
    return (
        <div
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
            >
            <img className='chatListItem-avatar' src={data.image} />
            <div className='chatListItem-lines'>
                <div className='chatListItem-line'>
                    <div className="chatListItem-name">{data.title}</div>
                    <div className="chatListItem-date">00:00</div>
                </div>
                <div className='chatListItem-line'>
                    <div className="chatListItem-lastMsg">
                        <p>Opa, blz?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}