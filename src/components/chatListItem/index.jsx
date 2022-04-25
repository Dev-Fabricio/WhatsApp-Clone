import React from 'react'
import './chatListItem.css'

export const ChatListItem = () => {
    
    return (
        <div className="chatListItem">
            <img className='chatListItem-avatar' src="https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png" />
            <div className='chatListItem-lines'>
                <div className='chatListItem-line'>
                    <div className="chatListItem-name">Nome</div>
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