import * as React from "react";
import {useState} from 'react';
function MyCounter() {
  // first parameter is value
  // second parameter is function to update value 
  const [counter, updateCounter] = useState(0);

  return (<div className="container">
        <h2>{counter}</h2>
        <input type="text" value={counter} onChange={()=> updateCounter(counter+1)}/>
        <button onClick={()=> updateCounter(counter+1)}>Click to Update</button>
  </div>);
}

export default MyCounter;
