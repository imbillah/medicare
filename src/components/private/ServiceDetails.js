import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function ServiceDetails() {
    const [service, setService] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        fetch("/fakeDB/services.json")
        .then(res => res.json())
        .then(data => setService(data))
      },[]);

const filterService = service?.filter(sr=>(sr.id == id))
const srData = filterService[0]


    return (
        <div className="container text-center">
        <div className="card my-5 p-3 mx-auto rounded-3 shadow w-75">
        <img src={srData?.img}className="card-img-top rounded-3" alt=''/>
        <div className="card-body">
          <h5 className="card-title text-success fw-bold display-6 my-3">
            {srData?.name}
          </h5>
          <h4 className="card-title mt-4 fw-bold">Service Details:</h4>
          <p className="card-text fst-italic lead">{srData?.description}</p>
          <h5 className='mb-4 fw-bold'>Appointment start from: ${srData?.price}</h5>
          <Link to ='/contact'> <button className='btn btn-success'>Appoint a doctor</button></Link>
        </div>
      </div>
    </div>
    )
}

export default ServiceDetails;