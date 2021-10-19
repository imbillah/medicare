import initilizeFirebase from "../firebase/config";
import swal from 'sweetalert';
import {
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";



initilizeFirebase();

const useFirebase = ()=>{
  const [user, setUser] = useState({});
  const auth = getAuth();

  //google signin
  const googleSignInHandler =()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);  
  }
  //email & pass register
  const registerUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user)
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                swal("Good job!", "Account created! Nevigate to Home page", "success");
            })

        });
}
    // user login with email & pass
    const logInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email , password)
        
    }
  //user logout
  const logOut = ()=>{
      signOut(auth).then(()=>{
          setUser({})
      })
  }
  // update user
  useEffect(()=>{
      onAuthStateChanged(auth, (user) =>{
          if(user){
              setUser(user)
          }
      })
  },[])
  return{
      user,
      googleSignInHandler,
      registerUser,
      logInUser,
      logOut
  }
};
export default useFirebase;