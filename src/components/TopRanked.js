import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";
import SingleTopRanked from "./SingleTopRanked";

const TopRanked = () => {
  const { TopAnimes, isLoading, fetchTopAnimes, isError } = useGlobalContext();

  useEffect(() => {
    fetchTopAnimes();
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
          <h2>the highest-ranked anime</h2>
        </div>
        <div className="loader"></div>;
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="title-form">
        <h2>the highest-ranked anime</h2>
      </div>
      <main className="main-content">
        {TopAnimes.map((anime) => {
          return <SingleTopRanked anime={anime} key={anime.mal_id} />;
        })}
      </main>
    </>
  );
};

export default TopRanked;
