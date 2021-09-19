import React, { useState, useEffect } from "react";

import Card from "../components/Card/Card";
import "./list.css";
const API = "https://www.omdbapi.com/?i=tt3896198&apikey=26d49381";

const List = () => {
  const [movie, setMovie] = useState({
    data: [],
    searchTerm: "",
    error: "",
    noResults: false,
  });
  const callApi = async () => {
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    setMovie({ data: resJSON.Search });
    console.log(resJSON);
  };
  const handleSubmit = async (e) => {
    setMovie({ ...movie, error: "" });
    if (e.key === "Enter") {
      if (movie.searchTerm == undefined || movie.searchTerm == "") {
        return setMovie({ ...movie, error: "Please write a valid text" });
      } else {
        const response = await fetch(`${API}&s=${movie.searchTerm}`);
        const data = await response.json();

        if (!data.Search) {
          return setMovie({ ...movie, noResults: true });
        }

        return setMovie({
          data: data.Search,
          searchTerm: "",
          error: "",
          noResults: false,
        });
      }
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const noResults = () => {
    return (
      <div className="text-center mt-10">
        <h1 className="font-bold text-4xl">No search results found...</h1>
      </div>
    );
  };
  const movieCards = () => {
    return (
      <div className="movie-container grid grid-cols-3 gap-5">
        {movie.data.map((movie, i) => (
          <Card movie={movie} key={i} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="text-center p-5">
        <input
          type="text"
          className="search form-control w-2/6 h-10 rounded-xl border-2 border-white placeholder-white text-white border-opacity-80 text-left px-3"
          placeholder="Search"
          onChange={(e) => setMovie({ ...movie, searchTerm: e.target.value })}
          onKeyPress={handleSubmit}
        />
        <p className="text-white">{movie.error ? movie.error : ""}</p>
      </div>
      <div className="containers my-6">
        {movie.noResults ? noResults() : movieCards()}
      </div>
    </>
  );
};

export default List;
