import React from "react";
import NBY from "../../assets/images/NBY.png";
import { Link } from "react-router-dom";

import { useTypewriter, Cursor } from "react-simple-typewriter"; // Importer le composant correctement
import "./Header.scss";

const Header = () => {
  const [text] = useTypewriter({
    words: ["My productivity", "My passion", "My work", "My website!"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="Header">
      <nav>
        <ul>
          <a href="Objectifs">
            <li className="Header__list">Objectifs</li>
          </a>
          <a href="/">
            <li className="Header__list">home</li>
          </a>
        </ul>
      </nav>
      <button className="navbarLogo">
        <img className="navbarLogo__img" src={NBY} alt="logo" />
      </button>

      <p className="Loisir">
        {"love"} {""}
        <span className="Loisir__text">{text}</span>
        <Cursor cursorColor="red" />
      </p>
    </div>
  );
};

export default Header;
