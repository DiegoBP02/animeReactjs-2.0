import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const SingleTopRanked = ({ anime }) => {
  const { title, year, url, members, score } = anime;

  return (
    <a href={url} className="anime" target="_blank">
      <article>
        <img src={anime.images.jpg.large_image_url} alt={title} />
        <div className="anime-info">
          <h4 className="title">{title}</h4>
          <p>{year === "" ? null : year}</p>
          <p>{members.toLocaleString()} members</p>
          <p>
            <span className="star">
              <BsFillStarFill />
            </span>
            {score}
          </p>
        </div>
      </article>
    </a>
  );
};

export default SingleTopRanked;
