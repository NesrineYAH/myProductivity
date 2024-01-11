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

const Task = ({ task, onTaskToggle }) => {
  return (
    <div className="mes_Tasks">
      <input type="checkbox" checked={task.completed} onChange={onTaskToggle} />
      <label className="taksTile">{task.title}</label>
      <div className="task-dates">
        <span className="date"> Start Date: {task.startDate}</span>
        <span className="date">End Date: {task.endDate}</span>
      </div>
    </div>
  );
};

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
