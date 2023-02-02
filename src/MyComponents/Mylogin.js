import React from 'react'
import MyNav from './MyNav';
import { MyFooter } from './MyFooter';
export default function Mylogin() {
  return (
    <div>
      <MyNav/>
      <div>
        <h2 style={{textAlign: 'center'}}>Login</h2>
        <div className="container">
        </div>
        <div className="container" style={{width: '160px'}}>
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit">Signin</button>
          <button type="submit">Signup</button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
          </label>
        </div>
        <button type="button" className="cancelbtn" style={{textAlign: 'center'}}>Cancel</button>
        <button className="psw" style={{width: '220px'}}> <a href="#" style={{textAlign: 'center'}}>Forgot
            password?</a>
        </button></div>
      <MyFooter/>
    </div>
    
  )
};
