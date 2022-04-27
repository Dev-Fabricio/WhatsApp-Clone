import React, { useState, useEffect, useRef } from 'react'
import './ChatWindow.css'

import SearchIcon from '@material-ui/icons//Search';
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons//MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import EmojiPicker from 'emoji-picker-react'

import { MessageItem } from '../MessageItem /Index';

export const ChatWindow = ({user}) => {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const body = useRef()

    const [emojiOpen, setEmojiOpen] = useState(false)

    const [text, setText] = useState('')

    const [listening, setListening] = useState(false)

    const [list, setList] = useState([
        {author: 123,body: 'blá blá blá'},
        {author: 123,body: 'blá blá blá blá blá blá'},
        {author: 1234,body: 'blá blá?'},
    ])

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list,])

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.result[0][0].transcript );
            }
            
            recognition.start()
        }
    }

    const handleSendClick = () => {

    }

    return (
        <div className='chatWindow'>
            <div className='chatWindow-header'>
                <div className='chatWindow-headerinfo'>
                    <img className='chatWindow-avatar' src='https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png' />
                    <div className='chatWindow-name'>Nome</div>
                </div>
                <div className='chatWindow-headerbuttons'>
                    <div className='chatWindow-btn'><SearchIcon style={{color: '#919191'}}/></div>
                    <div className='chatWindow-btn'><AttachFileIcon style={{color: '#919191'}}/></div>
                    <div className='chatWindow-btn'><MoreVertIcon style={{color: '#919191'}}/></div>
                </div>
            </div>
            <div className='chatWindow-body' ref={body} >
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
                <div className='chatWindow-emojiarea' style={{height: emojiOpen ? '200px' : '0px'}}>
                    <EmojiPicker 
                        onEmojiClick={handleEmojiClick}
                        disableSearchBar
                        disableSkinTonePicker
                    />
                </div>
            <div className='chatWindow-footer'>
                <div className='chatWindow-pre'>

                    <div className='chatWindow-btn'style={{width: emojiOpen?40:0}}><CloseIcon style={{color: '#919191'}} onClick={handleCloseEmoji}/></div>

                    <div className='chatWindow-btn'><InsertEmoticonIcon style={{color: emojiOpen?'#009868':'#919191'}} onClick={handleOpenEmoji}/></div>
                </div>
                <div className='chatWindow-inputarea'>
                    <input 
                    type='text' 
                    className='chatWindow-input' 
                    placeholder='digite uma mensagem'
                    value={text}
                    onChange={e=>setText(e.target.value)} />
                </div>
                <div className='chatWindow-pos'>
                    {text === '' ? 
                        <div
                        className='chatWindow-btn'
                        onClick={handleMicClick}
                        ><MicIcon style={{color: listening ? '#1262ce' : '#919191'}}/></div>
                        
                        :

                        <div
                        className='chatWindow-btn'
                        onClick={handleSendClick}
                        ><SendIcon style={{color: '#919191'}}/></div>
                }
                    
                    
                </div>
            </div>
        </div>
    )
}