import React from 'react'
import MyNav from './MyNav'
import { MyFooter } from './MyFooter'
export const MyHome = () => {
    return (
     
        <div>
          <MyNav/>
          <div>
         <div className="carousel">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div> 
            <div className="carousel-inner">
              <div className="carousel-item active" style={{height: '50vh'}}>
              
                <div className="carousel-caption d-none d-md-block" style={{textAlign: 'center'}}>
                  <h1 style={{color: 'black'}}>GRANT PORTAL</h1>
                  <hr style={{color: 'aliceblue'}} />
                  <h6 style={{color: 'dimgrey'}}>A Place For Researchers</h6>
                  <span className="badge rounded-pill text-bg-light">ADMIN</span>
                  <span className="badge rounded-pill text-bg-light">RESEARCHER</span>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <hr />
        <br />
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
        </div>
       <MyFooter/>
      </div>
    );
  }
          
