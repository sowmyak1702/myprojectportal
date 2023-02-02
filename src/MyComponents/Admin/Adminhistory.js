import React from 'react'
import Adminnav from './Adminnav'
import { AdminFooter } from './AdminFooter'

export default function Adminhistory() {
  return (
    <div>
        <Adminnav/>
       <div>
        <h4>Data Of Previously Uploaded Ones</h4>
        <h6>Grants information</h6>
        <br></br>
        <br></br>
        <br></br>
        <table className="table">
          <thead>
            <tr><th>
                <h5> S.NO</h5>
              </th>
              <th><h5>N/I</h5></th>
              <th><h5>Field</h5></th>
              <th><h5>Age Range</h5></th>
              <th><h5>Grant Range</h5></th>
              <th><h5>Starting Year</h5></th>
              <th><h5>Ending Year</h5></th>
              <th><h5>View</h5></th>
              
              <hr></hr>
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
              <td>30000-60000</td>
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
              <td>250000-500000</td>
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
              <td>20000-40000</td>
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
              <td>100000-300000</td>
              <td>2022</td>
              <td>2025</td>
              <td>Link</td>
            </tr>
            <br></br>
            </tbody>
        </table>
      </div>
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
