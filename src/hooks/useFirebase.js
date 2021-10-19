import initilizeFirebase from "../firebase/config";

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
import { Redirect, useHistory } from "react-router";


initilizeFirebase();

const useFirebase = ()=>{
  const [user, setUser] = useState({});
  const history = useHistory();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignInHandler =()=>{
      signInWithPopup(auth, googleProvider).then(res =>{
          <Redirect to ='/'/>
      })
  }
  const logOut = ()=>{
      signOut(auth).then(()=>{
          setUser({})
      })
  }
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
      logOut
  }
};
export default useFirebase;