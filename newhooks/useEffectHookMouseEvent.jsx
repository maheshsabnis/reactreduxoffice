import React, {useEffect, useState} from 'react'


function UseEffectHookMouseEvent() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const detectMouseMove = (evt) => {
        console.log(`Mouse Move`);
        setX(evt.clientX);
        setY(evt.clientY);
    };

    useEffect(() => {
         console.log('Use Effect is called');
         window.addEventListener('mousemove', detectMouseMove);
        // return a function for cleanup
        return ()=>{
            console.log('Component unmounting code'); 
            window.removeEventListener('mousemove',detectMouseMove);
        }
    
        },[]); //--> Here Empty Array means that effect does not depends on any prop or state

    return (
        <div>
            Use Effect X - {x} Y - {y}
        </div>
    )
}

export default UseEffectHookMouseEvent

