import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Services() {
    const [services, setServices] = useState([])
    useEffect(()=>{
      fetch("/fakeDB/services.json")
      .then(res => res.json())
      .then(data => setServices(data));
    },[])
    return (
      <div className='container text-center'>
        <h1 className='text-center my-5 fw-bold'>Our Top Rated Health Services</h1>
        <div className='row row-cols-lg-3 g-3'>
          {
            services.map(service => (
              <article key={service.id}>
                  <div className="card h-100 shadow rounded-3" >
                <img src={service.img} className="card-img-top" style={{height: '250px'}} alt="service-img"/>
                <div className="card-body">
                <h3 className="card-title my-3 text-success">{service.name}</h3>
                <p className="card-text mb-3 lead">{service.tittle}</p>
                <Link to={`/service/${service.id}`} className='text-decoration-none fw-bold'>
                  <button className ='btn btn-outline-success'>Get Details</button>
                </Link>
                </div>
              </div>
              </article>
            ))
          }
        </div>
      </div>
    );
}

export default Services;

