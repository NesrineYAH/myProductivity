import React, { useState, useEffect } from "react";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { useParams } from "react-router-dom";
import { projectsData } from "./data/projects";
import ProjectProgress from "./Components/ProjectProgress/ProjectProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import "./App.scss";

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
  const calculateProgress = () => {
    // Calculate progress based on completed tasks, for example
    const totalTasks = projectsData.reduce(
      (acc, project) => acc + project.tasks.length,
      0
    );
    const completedTasks = projectsData.reduce((acc, project) => {
      return acc + project.tasks.filter((task) => task.completed).length;
    }, 0);
    return (completedTasks / totalTasks) * 100;
  };
  const progress = calculateProgress();
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState(projectsData);
  const handleTaskToggle = (projectId, taskId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.map((task) =>
              task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
            ),
          };
        }
        return project;
        <div className="toutProjects">{projectsData.titlePr}</div>;
      })
    );
  };
  console.log(projects);
  console.log(projects.tasks);

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    // Update the date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <div id="MeObje">
        <h1>MY WOKFLOW PRODUCTIVITY 2024 </h1>
        <div className="current-date">{currentDate.toLocaleString()}</div>
        <div className="project__Container">
          {projects.map((project) => (
            <div key={project.id} className="prodcutCard">
              <ProjectProgress project={project} />
              {project.tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onTaskToggle={() => handleTaskToggle(project.id, task.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
