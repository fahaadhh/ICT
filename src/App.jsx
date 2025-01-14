import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { AirlineSeatFlat, FileDownloadDoneOutlined, FolderOutlined } from '@mui/icons-material'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>FD4REMAPS</h1>
      <Routes>
        <Route path='/log' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/state' element={<State />} />
      </Routes>
      <Navbar />
      <FileDownloadDoneOutlined />
      <FolderOutlined />
      <AirlineSeatFlat />
    </div>
  )
}

export default App
