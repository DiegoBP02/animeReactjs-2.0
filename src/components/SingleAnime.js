import React from "react";

const SingleAnime = ({ anime }) => {
  const { title, year, url } = anime;
  return (
    <a href={url} className="anime" target="_blank">
      <article>
        <img src={anime.images.jpg.large_image_url} alt={title} />
        <div className="anime-info">
          <h4 className="title">{title}</h4>
          <p>{year === "" ? null : year}</p>
        </div>
      </article>
    </a>
  );
};

export default SingleAnime;
