import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAX1JsQ6F2zeYNicGK4z41mKkTF6AeiDyM",
    authDomain: "medi-care-online.firebaseapp.com",
    projectId: "medi-care-online",
    storageBucket: "medi-care-online.appspot.com",
    messagingSenderId: "1034327872067",
    appId: "1:1034327872067:web:b8cc13471c4a6190813af6"
  };

  const initilizeFirebase = () => {
    initializeApp(firebaseConfig);
  };
  export default initilizeFirebase;