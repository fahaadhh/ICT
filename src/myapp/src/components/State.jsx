import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'

const State = () => {
    var [name, setname] = useState("Ram")
    var [val, setval] = useState()

    const handleinput = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const subhandler = () => {
        console.log('Hai ' + name)
        setval(name)
        setname("")

    }


    return (
        <div>
            <h1>Welcome to MYAPP</h1>
            <h1>Welcome {val} </h1>
            <TextField label="Name" variant="outlined" value={name} onChange={handleinput} /><br />
            <Button variant='contained' onClick={subhandler}>Submit</Button>
        </div>
    )
}

export default State