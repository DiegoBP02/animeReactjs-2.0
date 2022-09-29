import React from "react";
import { useGlobalContext } from "./context";
import SingleAnime from "./SingleAnime";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Main = () => {
  const { animeList, isLoading } = useGlobalContext();
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
