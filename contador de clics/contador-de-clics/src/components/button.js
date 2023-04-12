import React from "react";
import '../stylesheets/button.css'

function Button({ text, isAClicButton, manageClic }) {
    return (
        <button 
        className={isAClicButton ? 'clic-button' : 'restart-button'}
            onClick={manageClic}>
            {text}
        </button>
    );
}

export default Button;