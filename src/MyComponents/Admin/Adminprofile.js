import React from 'react'
import Adminnav from './Adminnav'
import { AdminFooter } from './AdminFooter'
export default function Adminprofile() {
  return (
    <div>
        <Adminnav/>
       <h1 style={{textAlign: 'center'}}>Profile </h1>
       <div className="container" style={{width: '190px'}}>
          <label htmlFor="uname"><b>Name</b></label>
          <input type="text" placeholder="NAME" name="uname" required />
          <label htmlFor="uname"><b>Full Name</b></label>
          <input type="text" placeholder="FULL NAME" name="uname" required />
          <label htmlFor="uname"><b>Email-id</b></label>
          <input type="text" placeholder="admin123@gmail.com" name="uname" required />
          <label htmlFor="uname"><b>Phone Number</b></label>
          <input type="text" placeholder="hdydsksyshkk" name="uname" required />
          <label htmlFor="uname"><b>Job</b></label>
          <input type="text" placeholder="hdydsksyshkk" name="uname" required />

         
        </div>

       <br></br>
       <AdminFooter/>
    </div>
  )
}
