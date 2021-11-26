import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../../media/images/mission.jpg';
function Mission() {
    return (
        <>
        <div className=" container d-lg-flex my-5">
            <div className="custom-width ms-3">
            <img src={image} className='img-fluid mt-2' alt="" />
            </div>
            <div className="custom-width mt-5">
            <h1 className="fw-bold mt-2">
                Our Mission
            </h1>
            <p className='lead mt-3 lh-lg'>“Our mission is to bring healthcare of International standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity”</p>
            <Link to ='/contact'>
                <button className="btn btn-outline-success mt-4 py-2 px-4 rounded-pill fw-bold">Contact Us</button>
            </Link>
            </div>
      </div>
        </>
    )
}

export default Mission;
