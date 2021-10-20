import initilizeFirebase from "../firebase/config";
import {
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
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
  //email & pass registration
  const registerUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
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
          else{
              setUser({})
          }
      })
  },[])
  return{
      user,
      setUser,
      auth,
      googleSignInHandler,
      registerUser,
      logInUser,
      logOut
  }
};
export default useFirebase;