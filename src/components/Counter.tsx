import React, { ReactElement, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Counter(): ReactElement {
    const [count, setCount] = useState<number>(0);

    const incrementCounter = (): void => {
        setCount(count + 1);
    };

    const resetCounter = (): void => {
        setCount(count - count);
    };

    return (
        <div style={{textAlign: 'center'}}>
            <span style={{fontSize: 25}} className="badge rounded-pill bg-success m-4">{count}</span>
            <button style={{fontSize: 25, fontWeight: "bold"}} className="btn btn-info m-2" onClick={incrementCounter}>Increment</button>
            <button style={{fontSize: 25, fontWeight: "bold"}} className="btn btn-warning m-2" onClick={resetCounter}>Reset</button>
        </div>
    );
}

export default Counter;