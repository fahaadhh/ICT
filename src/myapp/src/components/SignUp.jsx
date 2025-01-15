import React from 'react'
import { Button, TextField } from '@mui/material'
const SignUp = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
            <br /><Button variant="contained">SUBMIT</Button>
        </div>
    )
}

export default SignUp