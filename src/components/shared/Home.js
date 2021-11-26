import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../media/images/header-image.jpg'
import Mission from './extra/Mission';
import News from './extra/News';
import Services from './Services';
function Home() {
    return (
      <>
          <div className="container d-lg-flex">
          <div className="mt-5 custom-width">
            <p className="text-success">10 YEARS OF EXPERIENCE</p>
            <h1 className="fw-bold display-5 mt-2">
              Health Care<br />For Whole Family
            </h1>
            <p className='lead mt-3 lh-lg'>Established by Dr Prathap C Reddy in 2010, Medicare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Medicare has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.</p>
            <Link to ='/about'>
              <button className="btn btn-outline-success mt-4 py-2 px-4 rounded-pill fw-bold">ABOUT US</button>
            </Link>
          </div>
          <div className="ms-3 custom-width">
            <img src={image} className='img-fluid mt-5' alt="" />
          </div>
        </div>
        <Services/>
        <Mission/>
        <News/>
      </>
    )
}

export default Home;
