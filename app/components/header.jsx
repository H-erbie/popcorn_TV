"use client";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "./context/context";
import { HiOutlineBars2 } from "react-icons/hi2";
import {VscChromeClose} from 'react-icons/vsc'
import { Button } from '@/components/ui/button'



const Header = () => {
  const { user, showSide, search, showSearch, hideSide, sidemenu } = useGlobalContext();

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
            <span className={search ? "hidden" : 'search'} onClick={showSearch}>
              <FaSearch />
            </span>

            <input
              type="search"
              name="search"
              id="search"
              className="pl-3 p-1 border sm:block hidden border-white bg-[#222] rounded-md"
              placeholder={`Search`}
            />

            {sidemenu ? (
              <VscChromeClose onClick={hideSide} className="text-4xl cursor-pointer"/>
            ) : (
              <div className="text-4xl cursor-pointer">
                <HiOutlineBars2 onClick={showSide}/>
              </div>
            )}
          </>
        )}

        {!user && (
          <Button asChild>
          <Link href="/log-in">Login</Link>
        </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
