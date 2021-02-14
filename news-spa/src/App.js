import './App.css';
import React, {useCallback, useState} from 'react';
import NewsList from './Components/NewsList';
import Categories from './Components/Categories';

function App() {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category=>{setCategory(category)},[]);
  
  return(
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  )
}

export default App;
