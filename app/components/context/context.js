'use client'
import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "../firebase/config";
// import { useRouter } from "next/navigation";

const auth = getAuth(firebase_app)
const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // const router = useRouter()
    useEffect(()=>{
        const  unsubscribe =  onAuthStateChanged(auth, (user) => {
            if(user)  setUser(user)
            else setUser(null)
        })
        return () => unsubscribe()

    },[])
    return <AppContext.Provider value={{user}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}