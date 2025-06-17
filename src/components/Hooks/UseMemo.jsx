import { useEffect, useMemo, useState } from "react";

//Calculation Purposes
const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [multipliedVal, setMultipliedVal] = useState(0);

    const handleCount = () => {
        const result = count + 1;
        setCount(result);
        // setMultipliedVal(result * 10)
    }


    // useEffect(()=> {
    //     setMultipliedVal(count * 10);
    // //    if(count){ //when count value exists
    // //      setMultipliedVal(count + 10);
    // //    }
    // }, [count])


    const memoMultipliedResult = useMemo(()=> {
        const multipliedVal =  count * 10;
        return multipliedVal;
    })
    // console.log(memoMultipliedResult);
    console.log("Count Updated");  

    return (
        <div>
            <h2>Count Value: {count}</h2>
            {/* <h2>Multiplied Value: {multipliedVal}</h2> */}
            <h2>Multiplied Value: {memoMultipliedResult}</h2>


            <button onClick={handleCount} className="px-3 py-2 bg-lime-600 color-white font-semibold">Click to Add</button>
        </div>
    )
}

export default UseMemoHook;