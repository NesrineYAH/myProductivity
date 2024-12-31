import React, { useContext } from "react";
import NBY from "../../assets/images/NBY.png";
import file from "../file/file.js";
import "./Header.scss";
import Jobs from "../Jobs/Jobs";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to={`file`}>
            <li className="Header__list">Page de recherche</li>
          </Link>
          <Link to={`/Jobs`}>
            <li className="Header__list">Page Jobs</li>
          </Link>
        </ul>
      </nav>
      <button className="navbarLogo">
        <img className="navbarLogo__img" src={NBY} alt="logo" />
      </button>
    </div>
  );
};

export default Header;
