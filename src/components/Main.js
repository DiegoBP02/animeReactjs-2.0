import React from "react";
import { useGlobalContext } from "./context";
import SingleAnime from "./SingleAnime";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Main = () => {
  const { animeList, isLoading, isError } = useGlobalContext();
  if (isError) {
    return (
      <>
        <Navbar />
        <SearchForm />
        <div className="errorRequests">
          Too Many Requests!
          <br />
          <span>Please try again later!</span>
        </div>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <Navbar />
        <SearchForm />
        <div className="loader"></div>;
      </>
    );
  }
  return (
    <>
      <Navbar />
      <SearchForm />
      <main className="main-content">
        {animeList.map((anime) => {
          return <SingleAnime anime={anime} key={anime.mal_id} />;
        })}
      </main>
    </>
  );
};

export default Main;
