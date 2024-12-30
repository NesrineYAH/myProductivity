import React from "react";
import {
  BrowserRouter as BrowserRouter,
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import MesOmbission from "./Components/MesOmbission/MesOmbission";
import ObjectifListe from "./Components/Objectifs/Objectifs";
import { Link } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/Jobs"} element={<Jobs />} />
        </Routes>
        <MesOmbission />
        <ObjectifListe />
      </BrowserRouter>
    </div>
  );
};

export default App;
