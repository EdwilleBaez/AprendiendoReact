import React from "react";
import '../stylesheets/counter.css';

function Counter({ numClics }) {
    return (
        <div className="counter">
            {numClics}
        </div>
    )
}

export default Counter;