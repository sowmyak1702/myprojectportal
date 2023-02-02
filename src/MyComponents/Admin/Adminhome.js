import React from 'react'
import Adminnav from './Adminnav'
import { AdminFooter } from './AdminFooter'

export default function Adminhome() {
  return (
    <div>
        <Adminnav/>
       
        <h5>Admin Page</h5>
        <br></br>
        <br></br>
        
        <div className="container-fluid">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Upload 
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item active" href="#">From your files</a></li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <AdminFooter/>
    </div>
  )
}
