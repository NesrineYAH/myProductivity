import React from "react";
import NBY from "../../assets/images/NBY.png";
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
