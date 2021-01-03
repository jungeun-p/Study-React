import React, {useState} from 'react';
import './App.css';
import Event from './Components/EventPractice';
import Counter from './Components/Counter';
import Info from './Components/Info';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <button onClick={()=>{
      setVisible(!visible);
    }}>
      {visible ? 'hide' : 'show'}
    </button>
    {visible && <Info/>}
    </>
  );
}

export default App;
