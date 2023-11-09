import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Data1 = () => {
    const [data1, setData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => setData(response.data))
            .catch((err) => console.log(err))

    }, [])
    return (
        <div>{
            // fetch('https://jsonplaceholder.typicode.com/users')
            // .then(res => res.json())
            // .then(data => console.log(data))
        }
            <h1>Data:{data1}</h1>
        </div>
    )
}

export default Data1