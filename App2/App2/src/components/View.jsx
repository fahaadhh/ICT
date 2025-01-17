import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button } from '@mui/material'
import axios from 'axios'
import React from 'react'

const View = () => {
  const [data, setData] = React.useState([])
    axios.get("http://localhost:3004/view")
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      }
    )
  const Del = (id) => {
    console.log("Deleted" + id)
    axios.delete("http://localhost:3004/remove/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      }
    )
  }
  return (
    <div>
      <br />
      <br />
      <TableContainer>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell><h2>Name</h2></TableCell>
               <TableCell><h2>Age</h2></TableCell>
               <TableCell><h2>Department</h2></TableCell>
               <TableCell><h2>Salary</h2></TableCell>
             </TableRow>
           </TableHead>
          <TableBody>
              {data.map((val) => {
                return (
              <TableRow>
              <TableCell>{val.Name}</TableCell>
              <TableCell>{val.Age}</TableCell>
              <TableCell>{val.Department}</TableCell>
                    <TableCell>{val.Salary}</TableCell>
                    <Button variant='contained' color='error' onClick={() => { Del(val._id) }}>Delete</Button>
            </TableRow>
            )
          })}
           </TableBody>
         </Table>
       </TableContainer>
    </div>
  )
}

export default View