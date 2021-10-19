import React, { useEffect, useState } from 'react'

function News() {
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('/fakeDB/news.json')
        .then(res => res.json())
        .then(data =>setNews(data))
    })
    return (
        <>
        <article className= 'container mt-5'>   
                <h4 className='text-center fw-bold text-success'>Latest News</h4>
                <h1 className='text-center fw-bold mb-5'>Our Insights & Articles</h1>
            <div className='row row-cols-lg-3 g-4'>
            {
                news.map(nw =>(
                    <article key={nw.id}>
                        <div className="card h-100 shadow rounded-3" >
                    <img src={nw.img} className="card-img-top" alt=""/>
                    <div className="card-body">
                    <h5 className="card-title my-3">{nw.tittle}</h5>
                    <p className='text-muted'>{nw.description}</p>
                    <a className='fw-bold text-decoration-none my-4 text-success'>Learn More <i className="bi bi-arrow-right"></i></a>
                    </div>
                    </div>
                    </article>
                ))
            }
            </div>
        </article>
        </>
    )
}


export default News;
