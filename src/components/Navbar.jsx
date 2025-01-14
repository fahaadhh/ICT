import { AppBar, Button, Toolbar } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FolderIcon from '@mui/icons-material/Folder';
import AirlinesIcon from '@mui/icons-material/Airlines';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h3>MYAPP</h3>
                    &nbsp;
                    <Link to='/log'>
                        <Button variant='contained'>LOGIN</Button><br /></Link>&nbsp;
                    <Link to='/signup'>
                        <Button variant='contained'>SIGNUP</Button><br /></Link>&nbsp;
                    <Link to='/state'>
                        <Button variant='contained'>STATE</Button></Link>&nbsp;
                    <FileDownloadIcon />&nbsp;
                    <FolderIcon />&nbsp;
                    <AirlinesIcon />&nbsp;


                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar