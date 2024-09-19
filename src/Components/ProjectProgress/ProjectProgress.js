// ProjectProgress.js
import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
//import Line from "react-progressbar";

const ProjectProgress = ({ project }) => {
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter((task) => task.completed).length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div>
      <h3>{project.name}</h3>
      <span className="date"> Start Date: {project.startDate}</span>
      <span className="date">End Date: {project.endDate}</span>

      <div className="Container-Barre">
        <ProgressBar progress={progress} />
        <progress className="Barre" value={progress} max="100" />
        <span style={{ marginTop: "15px", marginLeft: "10px" }}>{`${
          progress.toFixed(2) * 1
        }%  `}</span>
      </div>
    </div>
  );
};

export default ProjectProgress;

/**
 
  const Task = ({ task, onTaskToggle }) => {
    return (
      <div className="mes_Tasks">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onTaskToggle}
        />
        <label className="taksTile">{task.title}</label>
     <div className="task-dates">
          <span className="date"> Start Date: {task.startDate}</span>
          <span className="date">End Date: {task.endDate}</span>
        </div> 
        
        </div>
      );
    };
 */
