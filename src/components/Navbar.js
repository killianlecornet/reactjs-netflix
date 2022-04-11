import { useEffect, useState } from "react";
import LogoNetflix from '../public/netflix-logo.png';
import AvatarNetflix from '../public/Netflix-avatar.png';
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show ? "nav__black " : ""}`}>
      <Link href={`/netflix`}>
      <img className="nav__logo" src={LogoNetflix.src} alt="netflix-logo" />
      </Link>
      <ul className="nav__title">
      <Link href={`/netflix`}>
        <li>
          <a>Accueil</a>
        </li>
        </Link>
        <li>
          <a>Séries</a>
        </li>
        <li>
          <a>Films</a>
        </li>
        <Link href={`/wishlist`}>
          <li>
            <a >Wishlist</a>
          </li>
        </Link>
      </ul>
      <input type="text" placeholder="Search.."></input>
      <img className="nav__avatar" src={AvatarNetflix.src} alt="netflix-avatar" />

    </div>
  );
};

export default Navbar;
