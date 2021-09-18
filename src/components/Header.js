import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <nav className="flex sm:justify-between px-12 py-3 ">
        <div className=" flex">
          <FontAwesomeIcon icon={faVideo} className="text-3xl text-pink-500 " />
          <h1 className=" text-white ml-4 mt-0.5">CuevaVideo</h1>
        </div>
        <ul className="sm:flex sm:justify-beetween text-center">
          <a href="" className="mx-2">
            Search
          </a>
          <a href="" className="mx-2">
            Movies
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Header;
