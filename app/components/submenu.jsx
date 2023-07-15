'use client'
import React, { Suspense } from "react";
import firebase_app from "../components/firebase/config";
import { getAuth, signOut } from "firebase/auth";
import ProfileImg from "../components/profileImg";
import { useGlobalContext } from "../components/context/context";
import { useRouter } from "next/navigation";
import UserName from "./UserName";
const Sidemenu = () => {
  const router = useRouter();
  const auth = getAuth(firebase_app);
  const { user, sidemenu } = useGlobalContext();
  const signnOut = () => {
    signOut(auth);
    router.push("/");
  };

  return (
    <>
      {user && (
        <div className={sidemenu ? "sidem right-0" : "sidem -right-[100vh]"}>
          <div className="rel flex flex-col gap-5">
            <Suspense
              fallback={
                <div className="h-[100px] mx-auto w-[100px] rounded-[50%] animate-pulse bg-gray-600"></div>
              }
            >
              <ProfileImg imgUrl={user.photoURL}/>
            </Suspense>

            <div className="flex flex-col justify-between h-[60vh]">
              <div className="flex justify-around items-center">
                <Suspense
                  fallback={
                    <div className="h-[25px] mx-auto w-[120px] rounded-md animate-pulse bg-gray-600"></div>
                  }
                >
                  <UserName name={user.displayName} />
                </Suspense>
           
              </div>
              <button
                className="py-1 mx-auto px-3 w-max hover:bg-red-500 bg-red-600 no-underline rounded-md capitalize"
                onClick={signnOut}
              >
                sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidemenu;
