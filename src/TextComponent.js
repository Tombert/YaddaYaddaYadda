import React from 'react';

export const TextInput = ({send}) => {
    
    let input = "";
    return (
        <div>
        <input ref={node => {
            input = node;
        }} />
        <button onClick={() => {
            send(input.value);
            input.value = ""; 
        }}> Send Message</button>
        </div>)
}

export default TextInput; 
