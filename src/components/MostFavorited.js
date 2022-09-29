import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";
import SingleFavorited from "./SingleFavorited";

const MostFavorited = () => {
  const { isLoading, mostFavorited, fetchMostFavorited, isError } =
    useGlobalContext();

  useEffect(() => {
    fetchMostFavorited();
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
          <h2>Most Favorited</h2>
        </div>
        <div className="loader"></div>;
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="title-form">
        <h2>Most Favorited</h2>
      </div>
      <main className="main-content">
        {mostFavorited.map((anime) => {
          return <SingleFavorited anime={anime} key={anime.mal_id} />;
        })}
      </main>
    </>
  );
};

export default MostFavorited;
