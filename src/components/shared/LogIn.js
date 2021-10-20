import React from 'react'
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/'
    const{googleSignInHandler, logInUser}=useAuth();

    const userEmail = e =>{
      setEmail(e.target.value)
    }
    const userPassword = e=>{
      setPassword(e.target.value)
    }

    // email/pass login
    const loginHandler = e =>{
      e.preventDefault()
      logInUser(email, password)
      .then(res=>{
        swal("Log in Successful!", "Welcome back !", "success")
        history.push(redirectUrl)
      }).catch(error => swal("Something went wrong!", `${error.message}`, "error")) 
    }

    // google logIn
    const handleGoogleSignIn =()=>{
      googleSignInHandler()
      .then(res=>{
        swal("Sign in Successful!", "Welcome back !", "success")
        history.push(redirectUrl)
      })
    };

    return (
        <div className='container text-center mt-5  shadow p-4'>
      <h2 className='fw-bold mb-5'>Log in to your account</h2>
      <form onSubmit={loginHandler}>
            <input type="email" onBlur={userEmail} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Your Email" required/>
            <input type="password" onBlur ={userPassword} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Password" required/>
            <button className='btn btn-success mt-4 px-4 py-2'>Log In</button>
      </form>
      <h5 className='mt-3 text-muted'>OR</h5>
      <button className='btn btn-success my-3 px-4 py-2' onClick={handleGoogleSignIn}>Log In with Google</button>
      <br />
      <Link to='/register' className='text-decoration-none text-success'><p>Need an Account?</p></Link>
    </div>
    )
}

export default LogIn;
