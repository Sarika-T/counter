import React, { useState, useEffect } from 'react';
import Buttons from '../Common/Buttons';

const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  
  const calculateBackgroundColor = (count) => {
    const normalized = Math.min(Math.max(count / 100, 0), 1);
    const bezierNormalized = `cubic-bezier(${normalized}, 0, 1, 1)`;
    const colorValue = Math.floor(normalized * 255);
    const colour = `rgb(${colorValue}, ${255 - colorValue}, 255)`;
    return {
        backgroundColor: `rgb(${colorValue}, ${255 - colorValue}, 255)`,
        transition: `${colour} 0.5s ${bezierNormalized}`
    };
  };

  const backgroundColor = calculateBackgroundColor(count);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column', 
      height: '100%', 
      backgroundColor: backgroundColor.backgroundColor, 
      transition: backgroundColor.transition,
      borderRadius: '10px',
      gap: '15px'
    }}>
      <div className='counter'>{count}</div>
      <span className='counter-text'>Counter</span>
      <div className='counter-buttons'>
      <Buttons 
            name="-" 
            variant="contained" 
            color="primary" 
            onClick={decrement} />
        <Buttons 
            name="Reset" 
            variant="contained" 
            color="primary" 
            onClick={reset} />
        <Buttons 
            name="+" 
            variant="contained" 
            color="primary" 
            onClick={increment} />
      </div>
    </div>
  );
};

export default Counter;
