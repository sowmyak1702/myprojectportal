import React from 'react'
import Adminnav from './Adminnav'
import { AdminFooter } from './AdminFooter'
export default function () {
  return (
    <div>
        <Adminnav/>
        <div>
        <h3>Select to Edit</h3>
        <br />
        <div className="container">
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              IN or N
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">International</a></li>
              <li><a className="dropdown-item" href="#">National</a></li>
            </ul>
          </div>
          
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Field
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">DataScience</a></li>
              <li><a className="dropdown-item" href="#">Artificial intellegince and Machine Learning</a></li>
              <li><a className="dropdown-item" href="#">Web Development</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Age Range
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">15-25</a></li>
              <li><a className="dropdown-item" href="#">26-35</a></li>
              <li><a className="dropdown-item" href="#">36-45</a></li>
              <li><a className="dropdown-item" href="#">46-55</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
             Grant Range
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Starting Year
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Ending Year
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <button type="submit">Enter</button>
        </div>
        <br /><br />
        <h5>Files</h5>
        
        <div className="table">
          <h4>Data Based On Selection</h4>
          <table className="table">
            <thead>
              <tr>
              <th><h5> S.no</h5></th>
                <th><h5>N/I</h5></th>
              <th><h5>Field</h5></th>
              <th><h5>Age Range</h5></th>
              <th><h5>Grant Range</h5></th>
              <th><h5>Starting Year</h5></th>
              <th><h5>Ending Year</h5></th>
              <th><h5>View</h5></th>
              </tr></thead>
              <tbody>
            <tr>
              <td>1</td>
              <td>National(N)</td>
              <td>AI and ML</td>
              <td>20-40</td>
              <td>30000-45000</td>
              <td>2023</td>
              <td>2027</td>
              <td>Link</td>
            </tr>
            <br></br>
            <tr>
              <td>2</td>
              <td>Inter National(IN)</td>
              <td>AI and ML</td>
              <td>30-40</td>
              <td>20000-42000</td>
              <td>2021</td>
              <td>2024</td>
              <td>Link</td>
            </tr>
            <br></br>
            <tr>
              <td>3</td>
              <td>National(N)</td>
              <td>Web Development</td>
              <td>25-45</td>
              <td>30000-50000</td>
              <td>2022</td>
              <td>2025</td>
              <td>Link</td>
            </tr>
            <br></br>
            <tr>
              <td>4</td>
              <td>Inter National(IN)</td>
              <td>Web Development</td>
              <td>35-45</td>
              <td>200000-300000</td>
              <td>2022</td>
              <td>2025</td>
              <td>Link</td>
            </tr>
            <br></br>
            <tr>
              <td>5</td>
              <td>National(N)</td>
              <td>C S E</td>
              <td>30-40</td>
              <td>400000-500000</td>
              <td>2022</td>
              <td>2025</td>
              <td>Link</td>
            </tr>
            <br></br>
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
      <br></br>
      
    <AdminFooter/>
    </div>
    
  )
};
