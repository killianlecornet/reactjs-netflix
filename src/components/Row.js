import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Button from "./Button";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const addTocart = (movie) => {
    let productToInsert = {
      id: movie.id,
      title: movie.name,
      img: movie.backdrop_path
    };

    const cartArray = [];

    if (localStorage.getItem("cart")) {

      const localStorageCart = JSON.parse(localStorage.getItem("cart"));
      localStorageCart.forEach((movie) => {
        cartArray.push(movie);
      });

      console.log(cartArray);

      const indexOfExistingProduct = cartArray.findIndex((mov) => mov.id === movie.id);

      if (indexOfExistingProduct !== -1) {
        cartArray[indexOfExistingProduct].quantity += 1;
      }
      else {
        cartArray.push(productToInsert);
      }
      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
    else {
      cartArray.push(productToInsert);
      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
  };

  return (
    <div className="row">
      <div className="row__posters">
        {movies.map((movie) => (
          <div className="row__contain"><img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
              {/* <Button
          type="button"
          classes="btn__row"
          function={() => addTocart(movie)}
          title="ajouter au panier"
        /> */}
        <button className="btn__row" onClick={() => addTocart(movie)}><FontAwesomeIcon icon={faPlusCircle} color="black"></FontAwesomeIcon></button>
        <button className="btn__row"><FontAwesomeIcon icon={faCircleInfo} color="black"></FontAwesomeIcon></button>
        <button className="btn__row"><FontAwesomeIcon icon={faPlay} color="black"></FontAwesomeIcon></button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
