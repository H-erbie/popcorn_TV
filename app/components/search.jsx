import React from "react";
import { useGlobalContext } from "./context/context";
import {VscChromeClose} from 'react-icons/vsc'

const Search = () => {
  const { user, search, hideSearch } = useGlobalContext();
  return (
    <>
      {user && (
      <div className={search ? "search-div" : 'search-div -top-[60px]'}>
          <input
          type="search"
          name="search"
          id="search"
          className="search-box"
          placeholder={`Search`}
        />
        <span onClick={hideSearch} className="bg-[#111] py-2 px-2 text-2xl">
            <VscChromeClose/>
            
        </span>
      </div>
      )}
    </>
  );
};

export default Search;
