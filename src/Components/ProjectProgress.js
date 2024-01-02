// ProjectProgress.js
import React from "react";
import ProgressBar from "./ProgressBar";
import Line from "react-progressbar";

const ProjectProgress = ({ project }) => {
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter((task) => task.completed).length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div>
      <h3>{project.name}</h3>
      <ProgressBar progress={progress} />
      <progress className="Barre" value={progress} max="100" />
      <span style={{ marginLeft: "10px" }}>{`${progress.toFixed(
        2
      )}% complet`}</span>
    </div>
  );
};

export default ProjectProgress;
