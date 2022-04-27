import React from 'react'
import './login.css'
import api from '../../api'

export default ({onReceive}) => {
    
    const handleGoogleLogin = async () => {
        let result = await api.ggPoupUp();
        if(result) {
            onReceive(result.user);
        } else {
            alert('Erro na tentativa de Login')
        }
    }

    return (
        <div className='login'>
            <button onClick={handleGoogleLogin}>Logar com o Google</button>
        </div>
    )
}