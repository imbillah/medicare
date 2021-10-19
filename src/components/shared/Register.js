import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
function Register() {
    
const {googleSignInHandler} = useAuth();


  return (
    <div className='container text-center mt-5  shadow p-4'>
      <h2 className='fw-bold'>Register your account</h2>
      <p className='fst-italic mt-3 text-success fw-bold'>Registration is always free</p>
      <form>
            <input type="text" className="form-control w-50 d-block mx-auto" placeholder="Your Name"/>
            <input type="email" className="form-control mt-3 w-50 d-block mx-auto" placeholder="Your Email"/>
            <input type="password" className="form-control mt-3 w-50 d-block mx-auto" placeholder="Password"/>
            <button className='btn btn-success mt-4 px-4 py-2'>Register</button>
      </form>
      <h5 className='mt-3 text-muted'>OR</h5>
      <button className='btn btn-success my-3 px-4 py-2' onClick={googleSignInHandler}>Register with Google</button>
      <br />
      <Link to='/login' className='text-decoration-none text-success'><p>Already Registered?</p></Link>
    </div>
  );
}

export default Register;
