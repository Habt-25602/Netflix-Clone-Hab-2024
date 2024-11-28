import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import requests from "../../utils/Requestes";
import "../Banner/Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Banner() {
  const [movie, setmovie] = useState({});
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setmovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchdata();
  }, []);

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
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">
            {" "}
            <PlayArrowIcon fontSize="large" className="icon" />
            Play
          </button>
          <button className="banner_button">My List</button>
        </div>
        <div className="banner_description">
          {movie?.overview?.length > 150
            ? `${movie.overview.slice(0, 150)}`
            : movie.overview}
        </div>
      </div>
      <div className="banner_fade"></div>
    </div>
  );
}

export default Banner;
