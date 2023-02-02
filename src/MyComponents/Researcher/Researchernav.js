import React from 'react'
import { Link } from 'react-router-dom'
export default function Researchernav() {
  return (
    <div>
      
      <section className="header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">GP</a>
            <a className="navbar-brand" href="#"> RESEARCHER</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link to="/" className="nav-item">Home
                  {/* <a className="nav-link active" aria-current="page" href="index.html" style={{color: 'white'}} >Home</a> */}
                </Link>
                <Link to="/rprofile" className="nav-item">Profile
                  {/* <a className="nav-link" href="profiler.html" style={{color: 'white'}} >Profile</a> */}
                </Link>
                <Link to="/grants" className="nav-item">Grants
                  {/* <a className="nav-link" href="grants.html" style={{color: 'white'}} >Grants</a> */}
                </Link>
                <Link className="nav-item">Raise an Issue
                  {/* <a className="nav-link" href="#" style={{color: 'white'}} >Raise an Issue</a> */}
                </Link>
                {/* <Link className="nav-item">Logout
                  <a className="nav-link" href="#" style={{color: 'white'}} >Logout</a>
                </Link> */}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    
    </div>
  )
}
