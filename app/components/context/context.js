"use client";
import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "../firebase/config";
// import { useRouter } from "next/navigation";

const auth = getAuth(firebase_app);
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sidemenu, setSidemenu] = useState(false);
  const [search, setSearch] = useState(false);
  const showSide = () => {
    setSidemenu(true);
  };

  const hideSide = () => {
    setSidemenu(false);
  };

  const showSearch = () => {
    setSearch(true);
  };
  const hideSearch = () => {
    setSearch(false);
  };
  // const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AppContext.Provider
      value={{
        user,
        search,
        hideSearch,
        showSearch,
        sidemenu,
        showSide,
        hideSide,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
