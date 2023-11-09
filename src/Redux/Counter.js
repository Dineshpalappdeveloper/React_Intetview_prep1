import React from 'react'
import { useSelector } from "react-redux"
const Counter = () => {
    const { data } = useSelector((state) => state.Counter.count)
    console.log(data);
    return (
        <div>Counter
            <h1>{data}</h1>
        </div>
    )
}

export default Counter