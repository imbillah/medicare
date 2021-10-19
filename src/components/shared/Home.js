import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../media/images/header-image.jpg'
import Services from './Services';
function Home() {
    return (
        <>
        <div className=" container d-flex">
        <div className="w-50 mt-5">
          <p className="text-success">10 YEARS OF EXPERIENCE</p>
          <h1 className="fw-bold display-4 mt-2">
            Learn new skill online <br /> from top educators
          </h1>
          <p className='lead mt-3 lh-lg'>i-School is an online learning platform with thousands of creative courses and classes taught by experts to help you learn new skills. Learn business, creative, and technology skills to achieve your personal and professional goals.</p>
          <Link to ='/about'>
            <button className="btn btn-outline-success mt-4 py-2 px-4 rounded-pill fw-bold">ABOUT US</button>
          </Link>
        </div>
        <div className="w-50 ms-3">
          <img src={image} className='img-fluid mt-5' alt="" />
        </div>
      </div>
      <Services/>
        </>
    )
}

export default Home;
