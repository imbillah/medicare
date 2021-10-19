import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function LogIn() {
    const{googleSignInHandler}=useAuth();
    return (
        <div className='container text-center mt-5  shadow p-4'>
      <h2 className='fw-bold mb-5'>Log in to your account</h2>
      <form>
            <input type="email" className="form-control mt-3 w-50 d-block mx-auto" placeholder="Your Email"/>
            <input type="password" className="form-control mt-3 w-50 d-block mx-auto" placeholder="Password"/>
            <button className='btn btn-success mt-4 px-4 py-2'>Log In</button>
      </form>
      <h5 className='mt-3 text-muted'>OR</h5>
      <button className='btn btn-success my-3 px-4 py-2' onClick={googleSignInHandler}>Log In with Google</button>
      <br />
      <Link to='/register' className='text-decoration-none text-success'><p>Need an Account?</p></Link>
    </div>
    )
}

export default LogIn;
