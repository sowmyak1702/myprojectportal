import React from 'react'
import {Link} from 'react-router-dom';



export default function MyNav() {
  return (
   
    <div>
    <section className="header">
        <nav className="navbar navbar-expand-lg text-bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><h1>GP</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link to="/" className="nav-item">Home
                  {/* <a className="nav-link active" aria-current="page" href="index.html" style={{color: 'white'}}>Home</a> */}
                </Link>
                <Link to="/about"className="nav-item">About
                  {/* <a className="nav-link" href="about.html" style={{color: 'white'}}>About</a> */}
                </Link> 
                <Link to="/latestannouncements " className="nav-item">Latest Announcements
                  {/* <a className="nav-link" href="latestannouncements.html" style={{color: 'white'}}>Latest Announcements</a> */}
                </Link>
                <Link to="/stats"className="nav-item">Stats Info
                  {/* <a className="nav-link" href="stats.html" style={{color: 'white'}}>Stats Info</a> */}
                </Link>
                <Link to="/admin"className="nav-item">Admin
                  {/* <a className="nav-link" href="stats.html" style={{color: 'white'}}>Admin Page</a> */}
                </Link>
                <Link to="/researcher"className="nav-item">Researcher
                  {/* <a className="nav-link" href="stats.html" style={{color: 'white'}}>Researcher Page</a> */}
                </Link>
                <Link to="/login"className="nav-item">Login
                  {/* <a className="nav-link" href="login.html" style={{color: 'white'}}><b>Login</b></a> */}
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    
    </div>

  )
}
