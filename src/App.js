//React-toolkit
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import './App.css';
import { decrement, increment } from './redux/counter';

export default function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={ () => dispatch(increment()) }>Increment</button>
      <button onClick={ () => dispatch(decrement()) }>Decrement</button>
    </div>
  );
}
