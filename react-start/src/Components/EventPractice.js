import React, { Component, useState } from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () =>{
        alert(username+': '+message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e =>{
        if(e.key==='Enter'){
            onClick();
        }
    }
    return (
        <div>
            <h2>Event Practice</h2>
            <input
                type="text"
                name="username"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="input anything"
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>check please</button>
        </div>
    );
};

export default EventPractice;