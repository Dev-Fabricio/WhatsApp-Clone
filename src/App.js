import React, {useState, useEffect} from 'react'
import './App.css'

import { ChatListItem } from './components/chatListItem/index'
import { ChatIntro } from './components/chatIntro/index'
import { ChatWindow } from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons//MoreVert';
import SearchIcon from '@material-ui/icons//Search';

export default () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Pessoa 1', image: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png'},
    {chatId: 2, title: 'Pessoa 2', image: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png'},
    {chatId: 3, title: 'Pessoa 3', image: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png'},
    {chatId: 4, title: 'Pessoa 4', image: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png'}
  ])
  const [activeChat, setActiveChat] = useState({})

  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png',
    name: 'Fabricio'
  })

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className='header-avatar' src={user.avatar}/>
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
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={()=>setActiveChat(chatList[key])}
            /> 
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined &&
        <ChatWindow 
          user={user}
        />}
        {activeChat.chatId === undefined &&
        <ChatIntro />}
      </div>
    </div>
  )
}