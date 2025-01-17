import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar color='success' position="fixed">
        <Toolbar>
          <h2>FD</h2>&nbsp;&nbsp;
          <Link to="/add">
            <Button variant="contained">Add</Button></Link>&nbsp;
          <Link to="/view">
          <Button variant="contained">View</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar