import React from 'react'; 

export default function Speaker(props) {
    return (
        <div>
            <button onClick={props.speak}>Speak</button> 
            <div>
            {props.message}
            </div>
        </div>
    )
} 