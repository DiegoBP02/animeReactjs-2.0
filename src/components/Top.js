import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";
import SingleTopAnime from "./SingleTopAnime";

const Top = () => {
  const { mostPopular, isLoading, fetchMostPopular } = useGlobalContext();

  useEffect(() => {
    fetchMostPopular();
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="title-form">
          <h2>Top Animes by Popularity</h2>
        </div>
        <div className="loader"></div>;
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="title-form">
        <h2>Top Animes by Popularity</h2>
      </div>
      <main className="main-content">
        {mostPopular.map((anime) => {
          return <SingleTopAnime anime={anime} key={anime.mal_id} />;
        })}
      </main>
    </>
  );
};

export default Top;
