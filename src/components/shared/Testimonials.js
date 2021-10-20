import React, { useEffect, useState } from 'react'

function Testimonials() {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch("/fakeDB/reviews.json")
        .then(res => res.json())
        .then(data =>setReviews(data));
    })
    return (
        <div className='container text-center my-5'>
            <p className='mt-5 fw-bold text-success'>Client Testimonials</p>
            <h1 className='my-4 fw-bold'>What Our Clients Say</h1>
            <div className ='row row-cols-lg-3 g-4 mt-5'>
                {
                    reviews.map(review =>(
                        <article key={review.id}>
                            <div className="card h-100 shadow rounded-3 p-3" >
                          <img src={review.img} className="card-img-top rounded-circle w-50 d-block mx-auto"  alt="service-img"/>
                          <div className="card-body">
                          <h5 className="card-title my-3 text-success">{review.name}</h5>
                          <h6 className="card-title my-3 ">{review.country}</h6>
                          <h6 className="card-title my-3 ">Rating: {review.ratings} ⭐</h6>
                          <p className="card-text mb-3 text-muted">"{review.remarks}"</p>
                          </div>
                        </div>
                        </article>
                      ))
                }
            </div>
        </div>
    )
}

export default Testimonials;
