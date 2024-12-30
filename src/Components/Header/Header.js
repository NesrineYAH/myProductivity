import React, { useContext } from "react";
import NBY from "../../assets/images/NBY.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Header.scss";
import Jobs from "../../pages/Jobs/Jobs";
import { Link } from "react-router-dom";
import file from "../../pages/file/file.js";

const Header = () => {
  const [text] = useTypewriter({
    words: ["My productivity", "My passion", "My work", "My website!"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="Header">
      <nav className="Header__nav">
        <ul>
          <Link to={`../Objectifs/#Objectifs`}>
            <li className="Header__list">Objectifs</li>
          </Link>
          <Link to="/">
            <li className="Header__list">home</li>
          </Link>
          <Link to={`./file`}>
            <li className="Header__list">Page de recherche</li>
          </Link>
          <a href={`./Jobs`} target="_blank">
            <li className="Header__list">Page Jobs</li>
          </a>
        </ul>
      </nav>
      <button className="navbarLogo">
        <img className="navbarLogo__img" src={NBY} alt="logo" />
      </button>
      <p className="Loisir">
        {"love"} <span className="Loisir__text">{text}</span>
        <Cursor cursorColor="red" />
      </p>
    </div>
  );
};

export default Header;
