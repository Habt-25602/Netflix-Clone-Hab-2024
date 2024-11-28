import React, { useEffect, useState } from "react";
import "../SingleRow/SingleRow.css";
import axios from "../../../utils/axios";
import movietrailer from "movie-trailer";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { width } from "@mui/system";

function SingleRow({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    let isMounted = true; // Track if component is mounted

    const fetchMovies = async () => {
      try {
        const request = await axios.get(fetchUrl);
        if (isMounted) {
          // Ensure results is an array
          setMovies(request.data.results || []);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();

    return () => {
      isMounted = false; // Cleanup function sets isMounted to false
    };
  }, [fetchUrl]); // Include fetchUrl as a dependency

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className={`row ${isLargeRow ? "row-large" : ""}`}>
      <h2>{title}</h2>
      <div className="row-posters">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row-poster ${isLargeRow ? "row-poster-large" : ""}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))
        ) : (
          <p>No movies available</p> // Optional: Display a message if no movies are found
        )}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default SingleRow;
