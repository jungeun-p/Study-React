import React, {useState, useMemo, useCallback} from 'react';

const getAverage = numbers => {
    console.log('caculate averaege...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum/numbers.length;
};
const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    
    const onChange = useCallback( e => {
        // 컴포넌트가 처음 렌더링 될 때마다 함수를 생성
        setNumber(e.target.value);
    }, [])
    
    const onInsert = useCallback(() => {
        // number or list가 바뀌었을 때만 함수 생성
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list])

    const handelKeyPress = e => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }
    const avg = useMemo(()=>getAverage(list), [list])
    
    return (
        <div>
            <h2>Average</h2>
            <input value={number} onChange={onChange} onKeyPress={handelKeyPress}/>
            <button onClick={onInsert}>Add</button>
            <ul>
                {list.map((value, index)=>(<li key={index}>{value}</li>))}
            </ul>
        <div>
            <b>Average: </b> {avg}
        </div>
        </div>
    );
};

export default Average;