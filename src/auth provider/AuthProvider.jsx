import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseAuth/firebase.init";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const signUpByEmail=(email,password)=>{

return createUserWithEmailAndPassword(auth,email,password)

}
const loginWithEmail =(email,password)=>{

    return signInWithEmailAndPassword(auth,email,password)
}
const provider = new GoogleAuthProvider()

const signUpByGoogle=()=>{
    return signInWithPopup(auth,provider)
}
const logOutUser=()=>{
    return signOut(auth)
}
const updateUser=(name,photo)=>{
return updateProfile(auth.currentUser,{
    displayName:name, photoURL:photo
})
}
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    
    if(currentUser){
        setUser(currentUser)
    }
    setLoading(false)
 
    return ()=>unsubscribe()
     
    
})

},[])
    const authInfo={
signUpByEmail,
loginWithEmail,
signUpByGoogle,
logOutUser,
user,
setUser,
updateUser,
loading
    }
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;