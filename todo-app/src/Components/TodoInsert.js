import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';
import '@fortawesome/fontawesome-free/js/all.js';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    // useCallback : 한 번 함수 생성 후 재사용 
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    )
    return (
        <form class="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="write what to do" 
                value={value} 
                onChange={onChange}/>
            <button type="submit">
                <i className="fas fa-plus"></i>
            </button>
        </form>
    );
};

export default TodoInsert;