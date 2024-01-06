import React, { useState, useEffect } from "react";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { useParams } from "react-router-dom";
import { projectsData } from "./data/projects";
import ProjectProgress from "./Components/ProjectProgress/ProjectProgress";



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

const MesOmbission = () => {
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

  // Lorsque l'état change
  localStorage.setItem("isChecked", true);

  // Lors du chargement de la page
  const isChecked = localStorage.getItem("isChecked") === "true";

  const handleTaskToggle = (projectId, taskId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === projectId) {
          const updatedTasks = project.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          );

          localStorage.setItem(
            `tasks_${project.id}`,
            JSON.stringify(updatedTasks)
          );

          return {
            ...project,
            tasks: updatedTasks,
          };
        }
        return project;
      })
    );
  };

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const updatedProjects = projects.map((project) => ({
      ...project,
      tasks:
        JSON.parse(localStorage.getItem(`tasks_${project.id}`)) ||
        project.tasks,
    }));
    setProjects(updatedProjects);
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the date every second
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="MeOMB">
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
  );
};

export default MesOmbission;
