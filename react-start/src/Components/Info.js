import React, {useEffect, useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return() => {
            console.log('cleanup');
            console.log(name);
        }
    })
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value)
    }
    return (
        <div>
            <h2>Info</h2>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <p>name:{name}</p>
                <p>nickname:{nickname}</p>
            </div>
        </div>
    );
};

export default Info;