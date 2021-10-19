import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth'
function Register() {
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/'

const {googleSignInHandler, registerUser} = useAuth();
const userName= e=>{
 setName(e.target.value);
}
const userEmail = e =>{
  setEmail(e.target.value)
}
const userPassword = e=>{
  setPassword(e.target.value)
}
// email/pass registration
const registerHandler = e =>{
  e.preventDefault()
  registerUser(name, email, password);
}
// google registration
const handleGoogleSignIn =()=>{
  googleSignInHandler()
  .then(res=>{
    swal("Good job!", "Account has been created!", "success");
    history.push(redirectUrl)
  })
};
  return (
    <div className='container text-center mt-5  shadow p-4'>
      <h2 className='fw-bold'>Register your account</h2>
      <p className='fst-italic mt-3 text-success fw-bold'>Registration is always free</p>
      <form onSubmit={registerHandler}>
            <input type="text" onBlur={userName} className="form-control w-50 d-block mx-auto" placeholder="Your Name" required/>
            <input type="email" onBlur={userEmail} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Your Email" required/>
            <input type="password" onBlur={userPassword} className="form-control mt-3 w-50 d-block mx-auto" placeholder="Password must be 6 characters" required/>
            <button className='btn btn-success mt-4 px-4 py-2'>Register</button>
      </form>
      <h5 className='mt-3 text-muted'>OR</h5>
      <button className='btn btn-success my-3 px-4 py-2' onClick={handleGoogleSignIn}>Register with Google</button>
      <br />
      <Link to='/login' className='text-decoration-none text-success'><p>Already Registered?</p></Link>
    </div>
  );
}

export default Register;
