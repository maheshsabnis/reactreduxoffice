import React, {useState, useEffect} from 'react'
import UseEffectHookMouseEvent from './useEffectHookMouseEVent'
function MouseContainerComponent() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {
                display && <UseEffectHookMouseEvent/>
            }
            </div>
    )
}

export default MouseContainerComponent;
