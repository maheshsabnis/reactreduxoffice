import * as React from 'react';
import {useState, useEffect} from 'react';

const DemoEffect=() => {
    const [counter, updateCounter] = useState(0);
    const [name, updateName] =useState('');
    // this is executes everytime the component renders
    // useEffect(() => {
    //     console.log('UseEffect Update Document title');
    //     document.title = `Clicked ${counter} times`;
    // });

    // conditionally executing effect
    useEffect(() => {
        console.log('UseEffect Update Document title');
        document.title = `Clicked ${counter} times`;
    },[counter]); //<-- this array parameter will be watched for changes to execute effect

    return (
        <div className="container">
          <input type="text" value={name} onChange={(e)=>updateName(e.target.value)}/>  
          <button onClick={()=> updateCounter(counter+1)}>{counter}</button>
        </div>
    );
}

export default DemoEffect;