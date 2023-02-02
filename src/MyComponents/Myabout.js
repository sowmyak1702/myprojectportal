import React from 'react'
import MyNav from './MyNav';
import { MyFooter } from './MyFooter';
import { Link } from 'react-router-dom';
export default function Myabout() {
  return (
    <div>
        <MyNav/>
        <h4>A Portal consisting of Information about multiple Grants</h4>
        <br />
        <h3>WHAT ARE GRANTS?</h3>
        <p>An amount of money given especially by the government to a person or organization for a special purpose</p>
        <p />
        <h3>USERS</h3>
        <ul>
          <li>ADMIN</li>
          <li>RESEARCHER</li>
        </ul>
        <div className="cards">
          <div className="card" style={{width: '18rem'}}>
            {/* <img src="bg.png" className="card-img-top" alt="..." /> */}
            <div className="card-body">

              <p className="card-text">Admin uploads and edits uploaded one which are used by researchers</p>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            {/* <img src="bg.png" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <p className="card-text">Researchers views the uploaded one which are used in research</p>
            </div>
          </div>
          <hr />
          <h4 style={{textAlign: 'left'}}>GRANTS available in fields</h4>
          <div className="cardss">
            <div className="card" style={{width: '18rem'}}>
              {/* <img src="bg.png" className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              {/* <img src="bg.png" className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              {/* <img src="bg.png" className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              {/* <img src="bg.png" className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div> 
        <hr />
        <MyFooter/>
    </div>
  )
}
