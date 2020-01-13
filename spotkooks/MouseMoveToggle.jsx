import React,{useState} from 'react'
import MouseMoveEffectComponent from './MouseMoveEffect'

function MouseMoveToggleComponent() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        {
            display && <MouseMoveEffectComponent/>
        }
        </div>
    )
}

export default MouseMoveToggleComponent
