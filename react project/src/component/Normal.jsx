import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Normal() {
  return (
    
    <>
    <Navbar/>
    <div className="textheader">
          <h1>generation thailand <br />
          react assessment</h1>

      </div><div className="button">
              <button><Link to='/'>User Home Sector</Link></button>
              <button><Link to='/admin'>Admin HOme Sector</Link></button>
          </div>
          <div className="table">
            </div></> 


  )

}

export default Normal