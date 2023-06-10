import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    
  const googleSignIn = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

     const updateUser = (name, photo) => {
       setloading(true);
       return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
       });
     };

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser);
            setloading(false)
        });
        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        updateUser,
        googleSignIn,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
