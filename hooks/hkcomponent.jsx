import React, { useState } from 'react';

export default function Counter(){
    const [value,increament] = useState(0);

    return (
        <div>
            <div>{value}</div>
            <button onClick={()=> increament(value+1)}>Increament</button>
        </div>
    );
}