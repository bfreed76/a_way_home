import React, { useState } from 'react'

require('dotenv').config({path:".env"})

const Navigation = () => {
    const [ home, setHome ] = useState([0,0])
    const [ currentLoc, setCurrentLoc] = useState([0,0])
    const apiKey = process.env.REACT_APP_MAPS_API_KEY
    const host = process.env.REACT_APP_HOST
    
    const printKey = () => {
        console.log("testing dotenv", host)
    }    
        
    return (
        <div>
            <h1>Navigation Page</h1>

            {printKey()}
            
        </div>
    )
}

export default Navigation
