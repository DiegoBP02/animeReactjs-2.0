import React, { useState, useEffect } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("kimetsu no yaiba");
  const [isLoading, setIsLoading] = useState(true);
  const [mostPopular, setMostPopular] = useState([]);
  const [TopAnimes, setTopAnimes] = useState([]);
  const [mostFavorited, setMostFavorited] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchAnime = async (query) => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=members&sort=desc&limit=25`
    );
    const data = await response.json();
    setIsLoading(false);
    if (data.data.length > 0) {
      setAnimeList(data.data);
    }
    if (data.status == 429) {
      setIsError(true);
    }
  };
  const fetchMostPopular = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=&order_by=members&sort=desc&limit=25"
    );
    const data = await response.json();
    setIsLoading(false);
    if (data.data.length > 0) {
      setMostPopular(data.data);
    }
    if (data.status == 429) {
      setIsError(true);
    }
  };
  const fetchTopAnimes = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=&order_by=score&sort=desc&limit=25"
    );
    const data = await response.json();
    setIsLoading(false);
    if (data.data.length > 0) {
      setTopAnimes(data.data);
    }
    if (data.status == 429) {
      setIsError(true);
    }
  };
  const fetchMostFavorited = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=&order_by=favorites&sort=desc&limit=25"
    );
    const data = await response.json();
    setIsLoading(false);
    if (data.data.length > 0) {
      setMostFavorited(data.data);
    }
    if (data.status === 429) {
      setIsError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  useEffect(() => {
    fetchAnime(search);
    // fetchMostPopular();
    // fetchTopAnimes();
    // fetchMostFavorited()
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        animeList,
        setAnimeList,
        search,
        setSearch,
        fetchAnime,
        handleSubmit,
        mostPopular,
        TopAnimes,
        fetchMostPopular,
        fetchTopAnimes,
        mostFavorited,
        fetchMostFavorited,
        isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
