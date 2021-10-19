import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Doctors() {
    const[doctors, setDoctors] = useState([])

    useEffect(()=>{
        fetch("/fakeDB/doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className='container'>
            <p className='text-center mt-5 fw-bold text-success'>Meet out Doctors</p>
           <h1 className='text-center mb-5 fw-bold'>Our Highly Qualified Doctors</h1>
            <div className='row row-cols-lg-3 g-4'>
            {
                doctors.map(doctor =>(
                    <article className='text-center' key={doctor.id}>
                        <div className="card h-100 shadow rounded-3" >
                    <img src={doctor.img} className="card-img-top" alt=""/>
                    <div className="card-body">
                    <h3 className="card-title my-3 text-success">{doctor.name}</h3>
                    <h5 className="card-title my-3 text-success">{doctor.dept}</h5>
                    <p className='text-muted'>Experience: {doctor.experience}+ years</p>
                    <h5 className="card-title my-4">Visiting fee: ${doctor.price}</h5>
                    <Link to="/contact"><button className='btn btn-success mb-3'>Get Appoinment</button></Link>
                    </div>
                    </div>
                    </article>
                ))
            }
            </div>
        </div>
    )
}

export default Doctors;
