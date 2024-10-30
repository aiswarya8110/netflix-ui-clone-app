import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "./YouTube";

const baseUrlForImage = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, largeRow }) {
  const [movies, setMovies] = useState([]);
  const [movieTrailerId, setMovieTrailerId] = useState();

  function getMovieTrailer(movie) {
    if (movieTrailerId) {
      setMovieTrailerId(null);
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((res) => {
          setMovieTrailerId(res?.split("v=")[1].substring(0, 11));
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
            onClick={() => getMovieTrailer(movie)}
            className={`row__poster ${largeRow && "row__posterLarge"}`}
            src={`${baseUrlForImage}${
              largeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {movieTrailerId && (
        <YouTube
          height="390"
          width="100%"
          title={title}
          videoId={movieTrailerId}
          autoplay={1}
        />
      )}
    </div>
  );
}

export default Row;
