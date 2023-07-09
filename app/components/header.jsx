"use client";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "./context/context";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import firebase_app from "./firebase/config";

const Header = () => {
  const { user } = useGlobalContext();
  const auth = getAuth(firebase_app);
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const signnOut = () => {
    signOut(auth);
    router.push("/");
  };

  const showDropdown = (e) => {
    setDropdown(true);
  };

  const hideDropdown = () => {
    setDropdown(false);
  };

  return (
    <header className="bg-black z-50 fixed top-0 left-0 w-screen flex items-center justify-between px-6 py-3">
      <div className="">
        <Link
          href={user ? "/home" : "/"}
          className="font-bold no-underline text-xl"
        >
          Popcorn TV+
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        {user && (
          <>
            <span className="text-2xl sm:hidden cursor-pointer">
              <FaSearch />
            </span>

            <input
              type="search"
              name="search"
              id="search"
              className="pl-3 p-1 border sm:block hidden border-white bg-[#222] rounded-md"
              placeholder={`Search`}
            />

            <div
              className="relative"
              onMouseOver={showDropdown}
              onMouseOut={hideDropdown}
            >
              <Suspense
                fallback={
                  <div className="h-[45px] w-[45px] rounded-[50%] animate-pulse bg-gray-600"></div>
                }
              >
                <img
                  src={user.photoURL}
                  alt=""
                  className="img cursor-pointer"
                />{" "}
              </Suspense>

              <div className={dropdown ? "drop scale-100" : "drop"}>
                <span className="cursor-pointer hover:text-red-300">
                  Profile
                </span>
                <button
                  className="py-1 px-3 w-max hover:bg-red-500 bg-red-600 no-underline rounded-md capitalize"
                  onClick={signnOut}
                >
                  sign out
                </button>
              </div>
            </div>
          </>
        )}

        {!user && (
          <Link
            href="/log-in"
            className="py-1 px-3 ml-5 hover:bg-red-500 bg-red-600 no-underline rounded-md capitalize"
          >
            sign in
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
