import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Ract = () => {
    var [name, setname] = useState()
    const aa = () => {
        setname("Angular")
    }
    const ab = () => {
        setname("React")
    }
    const ac = () => {
        setname("Vue")
    }
    useEffect(() => { aa ()}, []
    )

    return (
        <div>
            <h1>Welcome {name}</h1>
            <Button variant='outlined' onClick={aa}>Angular</Button>
            <Button variant='outlined' onClick={ab}>React</Button>
            <Button variant='outlined' onClick={ac}>Vue</Button>

        </div>
    )
}

export default Ract