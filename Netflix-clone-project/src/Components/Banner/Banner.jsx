import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import requests from "../../utils/Requestes";
import "../Banner/Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop"; // Import Stop icon
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false); // State to control trailer visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handlePlayButtonClick = () => {
    const movieName = movie?.title || movie?.name || movie?.original_name;

    if (movieName) {
      movieTrailer(movieName)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); // Set trailer URL
          setIsPlaying(true); // Set playing state to true
        })
        .catch((error) => console.log("Trailer not found", error));
    } else {
      console.log("No valid movie name found");
    }
  };

  const handleStopButtonClick = () => {
    setTrailerUrl(""); // Clear the trailer URL
    setIsPlaying(false); // Set playing state to false
  };

  const opts = {
    height: "1000px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!isPlaying ? ( // Show banner content or trailer based on playing state
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button
              className="banner_button play"
              onClick={handlePlayButtonClick}
            >
              <PlayArrowIcon fontSize="large" className="icon" />
              Play
            </button>
            <button className="banner_button list">My List</button>
          </div>
          <div className="banner_description">
            {movie?.overview?.length > 150
              ? `${movie.overview.slice(0, 150)}...`
              : movie.overview}
          </div>
        </div>
      ) : (
        <div style={{ padding: "40px" }}>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
      )}
      <div className="banner_fade"></div>
    </div>
  );
}

export default Banner;
