import React from 'react'
import { TextField, Button } from '@mui/material'

const Login = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
            <br /><Button variant="outlined">LOGIN</Button>
        </div>
    )
}

export default Login