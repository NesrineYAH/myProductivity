import React, { useState, useEffect } from "react";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { useParams } from "react-router-dom";
import { projectsData } from "./data/projects";
import ProjectProgress from "./Components/ProjectProgress/ProjectProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import ObjectifListe from "./Components/Objectifs/Objectifs";
import "./App.scss";
import MesOmbission from "./Components/MesOmbission/MesOmbission";



const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path={`../Objectifs/#Objectifs`} element={<Objectifs />} /> */}
        </Routes>
      </BrowserRouter>

      <MesOmbission />
      <ObjectifListe />
    </div>
  );
};

export default App;


