import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Index = () => {
  const [cart, setCart] = useState();

    const deleteCart = () => {
        localStorage.removeItem('cart');
        setCart(null);
    };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // console.log(cart.reduce((total, product) => total + (product.quantity * product.price, 0)));
  })


  const deleteProduct = (movie) => {
    const filteredcart = cart.filter((item) => item.id != movie.id);
    localStorage.setItem("cart", JSON.stringify(filteredcart));
    setCart(filteredcart);
  };


  return (
    
    <body>
           <Navbar />
    <div className="App">
      {cart ? (
        <>
          <table>
            <tbody  className="row__wishlist">
              {cart.map((movie) => (
                <tr key={movie.id}>
                  <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original${movie.img}`}
            alt={movie.title} />
                  <td><button className="btn__wishlist" onClick={() => deleteProduct (movie)}>Supprimer</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="btn__padding">
          <Button
            title="Tout supprimer"
            classes="btn btncolor-white"
            type="button"
            function={deleteCart}
          />
          </div>
        </>
      ) : (
        <p className="text__center">Votre panier est vide</p>
      )}
    </div>
    </body>
  );
};

export default Index;