import React from "react";

function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {

// function MovieCard({ title, posterSrc, genres }) {

  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>

    // static data
  //    <div className="movie-card">
  //    <img
  //      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM"
  //      alt="Mad Max: Fury Road"
  //    />
  //    <h2>Mad Max: Fury Road</h2>
  //    <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
  //  </div>

    
  );
}

export default MovieCard;
