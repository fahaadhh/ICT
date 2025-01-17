import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Add = () => {
  var [input, setinput] = useState({Name: "", Age: "", Department: "", Salary: ""})
  var navigate = useNavigate()
  
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    axios.post("http://localhost:3004/add", input)
      .then((res) => {
        alert(res.data.message)
        navigate("/view")
    })
  }
  return (
      <div>
          <br />
          <br />
          <h1>ENTER DATA</h1>
      <TextField label="Name" variant='standard' name='Name' value={input.Name} onChange={inputHandler}/><br />     
      <TextField label="Age" variant='standard' name='Age' value={input.Age} onChange={inputHandler}/><br />
      <TextField label="Department" variant='standard' name='Department' value={input.Department} onChange={inputHandler}/><br />
      <TextField label="Salary" variant='standard' name='Salary' value={input.Salary} onChange={inputHandler}/><br />           
          <Button variant="contained" onClick={addHandler}>SUBMIT</Button>
    </div>
  )
}

export default Add
