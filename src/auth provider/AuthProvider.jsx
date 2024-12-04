import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { createContext } from "react";
import { auth } from "../FirebaseAuth/firebase.init";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {


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

    const authInfo={
signUpByEmail,
loginWithEmail,
signUpByGoogle
    }
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;