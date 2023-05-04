import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const user = null;
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUserData =(user,name,photo)=>{
            updateProfile(user,{
                displayName:name,
                photoURL:photo
            })}
    
    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;