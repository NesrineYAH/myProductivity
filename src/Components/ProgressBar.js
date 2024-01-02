// ProgressBar.js
import React from "react";
import Line from "react-progressbar";

const ProgressBar = ({ progress }) => {
  //   const completedTasks = tasks.filter((task) => task.completed).length;
  //   const totalTasks = tasks.length;
  //   const progress = (completedTasks / totalTasks) * 100;

  //   return (
  //     <div>
  //       <progress value={progress} max="100"></progress>
  //       <span>{`${completedTasks} / ${totalTasks} tâches terminées`}</span>
  //     </div>
  //   );

  <div>
    <Line
      percent={progress}
      strokeWidth={4}
      strokeColor="#2db7f5"
      strokeLinecap="round"
    />
  </div>;
};

export default ProgressBar;
