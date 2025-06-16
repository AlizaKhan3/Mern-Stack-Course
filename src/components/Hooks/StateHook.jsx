import { useState } from "react";

const StateHook = () => {
    const [number, setNumber] = useState(0);

    const updateNumber = () => {
        let result = number + 1;
        setNumber(result)
    }
  return (
    <div>
        <h1>Number: {number}</h1>
        <button onClick={updateNumber} className="text-primary-color rounded-xl font-semibold bg-orange-400 p-3">Click Me!</button>
    </div>
  )
}

export default StateHook;