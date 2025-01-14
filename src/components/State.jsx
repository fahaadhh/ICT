import React, { useState } from 'react'
import { TextField } from '@mui/material'

const State = () => {
    var [name, setname] = useState("Ram")


    return (
        <div>
            <h1>Welcome to MYAPP</h1>
            <h1>Welcome {name} </h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br />
        </div>
    )
}

export default State