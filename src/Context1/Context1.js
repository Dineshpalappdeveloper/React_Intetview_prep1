import React, { useContext } from 'react'
import StoreM1 from './StoreM1';

const Context1 = () => {
    const data = useContext(StoreM1);
    console.log(data);
    return (
        <div>Context1</div>
    )
}

export default Context1