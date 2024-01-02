import React, { useState, useEffect } from "react";
import ProgressBar from "./Components/ProgressBar";
import { useParams } from "react-router-dom";
import { projectsData } from "./data/projects";
import ProjectProgress from "./Components/ProjectProgress";

import "./App.css";

const Task = ({ task, onTaskToggle }) => {
  return (
    <div className="mes_Tasks">
      <input type="checkbox" checked={task.completed} onChange={onTaskToggle} />
      <label>{task.title}</label>
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

  return (
    <section id="MeObje">
      <div className="project__Container">
        {projects.map((project) => (
          <div key={project.id}>
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
    </section>
  );
};

export default App;
