import React, {useState} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <h2>Conter</h2>
            <p>now counter value is {value}</p>
            <button onClick={()=>setValue(value+1)}>+1</button>            
            <button onClick={()=>setValue(value-1)}>-1</button>
        </div>
    );
};

export default Counter;