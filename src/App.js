import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import File from "./Components/file/file";
import MesOmbission from "./Components/MesOmbission/MesOmbission";
import ObjectifListe from "./Components/Objectifs/Objectifs";
import { Link } from "react-router-dom";
import "./App.scss";
import Jobs from "./Components/Jobs/Jobs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const App = () => {
  const [text] = useTypewriter({
    words: ["My productivity", "My passion", "My work", "My website!"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <p className="Loisir">
          {"love"} <span className="Loisir__text">{text}</span>
          <Cursor cursorColor="red" />
        </p>
        <MesOmbission />
        <ObjectifListe />
        <Jobs />
        <File />
      </BrowserRouter>
    </div>
  );
};

export default App;
