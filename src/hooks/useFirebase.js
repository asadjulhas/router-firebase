import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../firebase.init";



const GoogleAuth = getAuth(firebaseApp);

const useFirebase = () => {
  const [user, setUser] = useState({})
  const signInWithGoogle = () => {
const provider = new GoogleAuthProvider();

signInWithPopup(GoogleAuth, provider)
.then(res => {
  setUser(res.user)
})
.catch(error => {
  console.log(error.message)
})
  }

  useEffect(() => {
    onAuthStateChanged(GoogleAuth, (user) => {
      setUser(user)
    })

  },[])

  // Signout
  const googleSignOut = () => {
    signOut(GoogleAuth)
    .then(()=> {
      console.log('Signout successfully')
      .catch(error => {
        
      })
    })
  }

  return {
    user, 
    signInWithGoogle,
    googleSignOut
  }
}

export default useFirebase;