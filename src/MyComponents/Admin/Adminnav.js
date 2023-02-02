import React from 'react'
import {Link} from 'react-router-dom';


export default function Adminnav() {
  return (
   
    <div>
    <section className="header">
        <nav className="navbar navbar-expand-lg text-bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><h1>GP  ADMIN</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link to="/" className="nav-item">Home
                  {/* <a className="nav-link active" aria-current="page" href="index.html" style={{color: 'white'}}>Home</a> */}
                </Link>
                <Link to="/profile" className="nav-item">Profile
                  {/* <a className="nav-link" href="about.html" style={{color: 'white'}}>Profile</a> */}
                </Link> 
                <Link to="/edit" className="nav-item">Edit
                  {/* <a className="nav-linknk" href="latestannouncements.html" style={{color: 'white'}}>Edit</a> */}
                </Link>
                <Link to="/history" className="nav-item">History
                  {/* <a className="nav-linknk" href="stats.html" style={{color: 'white'}}>History</a> */}
                </Link>
                {/* <Link className="nav-item">
                  <a className="nav-linknk" href="stats.html" style={{color: 'white'}}>Log out</a>
                </Link> */}
               
              </ul>
            </div>
          </div>
        </nav>
      </section>
    
    </div>

  )
}
