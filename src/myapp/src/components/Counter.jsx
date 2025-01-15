import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Counter = () => {
    var [val, setval] = useState(0)

    const add = () => {
        setval(val + 1)
    }

    const sub = () => {
        setval(val - 1)
    }

    return (
        <div>
            <h1>Count : {val}</h1>
            <Button variant='outlined' onClick={add}>+</Button><br />
            <Button variant='outlined' onClick={sub}>-</Button><br />
        </div>
    )
}

export default Counter