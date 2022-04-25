import React, {useState, useEffect} from 'react'
import './App.css'

import { ChatListItem } from './components/chatListItem/index'
import { ChatIntro } from './components/chatIntro/index'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons//MoreVert';
import SearchIcon from '@material-ui/icons//Search';

export default () => {

  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className='header-avatar' src='https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png'/>
          <div className='header-buttons'>
            <div className='header-btn'>
                <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className='header-btn'>
                <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className='header-btn'>
                <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search-input'> 
            <SearchIcon style={{color: '#919191'}}  fontSize='small'/>
            <input type='search' placeholder='Procurar ou começar um nova conversa'/>
          </div>
        </div>
        <div className='chatlist'>
          {chatList.map((item, key) => (
            <ChatListItem 
              key={key}

            /> 
          ))}
        </div>
      </div>
      <div className='contentarea'>
            <ChatIntro />
      </div>
    </div>
  )
}