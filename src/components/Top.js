import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";
import SingleTopAnime from "./SingleTopAnime";

const Top = () => {
  const { mostPopular, isLoading, fetchMostPopular, isError } =
    useGlobalContext();

  useEffect(() => {
    fetchMostPopular();
  }, []);
  if (isError) {
    return (
      <>
        <Navbar />
        <div className="errorRequestsCenter">
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
