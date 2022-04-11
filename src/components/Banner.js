import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../pages/request/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "50% 10%",
      }}
    >
      <div className="header__contents">
        <h1 className="header__title">
          {movie?.title || movie.name || movie?.original_name}
        </h1>
        <h1 className="header__description">{movie?.overview}</h1>
        <div className="header__btn">
          
          <button className="btn btn__color-white"><FontAwesomeIcon icon={faPlay} color="black"></FontAwesomeIcon>                     Lecture</button>
          <button className="btn btn__color-grey"><FontAwesomeIcon icon={faCircleInfo} color="white"></FontAwesomeIcon>                Plus d'info</button>
        </div>
      </div>
      <div className="header__fadeBottom" />
    </header>
  );
};

export default Header;
