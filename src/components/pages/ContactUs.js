import React from 'react'
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import image from "../../media/images/contact.jpg"
function ContactUs() {
    const history = useHistory();
    const submitHandler=e=>{
        e.preventDefault()
        swal("Thank You", "A doctor will contact with you soon", "success")
        history.push('/')
    }
    return (
    <div className='container d-lg-flex my-3'>
        <div className='w-50 mt-5'>
            <h2 className='mt-4 fw-bold'>Contact Us</h2>
            <p className='fst-italic mt-4 text-success'>Fill out the form and we will get back to you soon</p>
            <form onSubmit={submitHandler}>
            <input type="text" className="form-control " placeholder="First Name" required/>
            <input type="text" className="form-control my-3" placeholder="Last Name"/>
            <input type="email" className="form-control" placeholder="Email" required/>
            <div className="input-group  my-3">
                <span className="input-group-text text-muted">Your Message</span>
                <textarea className="form-control" aria-label="With textarea" required></textarea>
                </div>
            <button className='btn btn-success'>Submit</button>
            </form>
            
        </div>
            <div className='w-50'>
            <img src={image} className='img-fluid ms-3 mt-5 rounded-3' alt="contactus" />
            </div>
    </div>
    )
}

export default ContactUs;
