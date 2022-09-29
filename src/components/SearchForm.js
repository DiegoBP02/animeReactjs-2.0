import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { handleSubmit, search, setSearch, animeList, isLoading } =
    useGlobalContext();
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Animes</h2>
      <input
        type="text"
        className="form-input"
        placeholder="Search for an anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {animeList.length === 0 && isLoading === false ? (
        <div className="error">Anime Not Found!</div>
      ) : null}
    </form>
  );
};

export default SearchForm;
