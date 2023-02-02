import React from 'react'
import Researchernav from './Researchernav'
import { Researcherfooter } from './Researcherfooter'
export default function Researcherhome() {
  return (
    <div>
        <Researchernav/>
       <br></br>
       <br></br>
       <br></br>
      
       <div>
        <h5>PREVIOUSLY DOWNLOADED</h5><hr />
        <table className="table">
          <thead>
            <tr><th>
                <h5> S.no</h5></th>
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
  <Researcherfooter/>
    </div>
  )
}
