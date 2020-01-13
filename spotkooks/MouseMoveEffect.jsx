import React, { useState, useEffect } from 'react';

const MouseMoveEffectComponent = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // method to read mouse position
    const recordMousePosition =(e) =>{
        console.log('I am Recording Mouse Postion');
        setX(e.clientX);
        setY(e.clientY);
    };
    // work for componentDidMount()
    // loisten for updates for State values componentDidUpdate()
    // update render()
    useEffect(()=>{
        window.addEventListener('mousemove', recordMousePosition);

        // adding cleanup for unmounted component
        return(()=>{
            console.log('Component is UnMounted');
            window.removeEventListener('mousemove', recordMousePosition);
        });
    },[]);

return        <div>
           <span>Use Effect</span> 
                X- {x} Y - {y}
        </div>
};

export default MouseMoveEffectComponent;