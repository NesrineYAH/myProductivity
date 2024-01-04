// Task.js
import React, { useState } from "react";

const Task = ({ task, onToggle }) => {
  //   const [tasks, setTasks] = useState([
  //     { id: 1, title: "Task 1", completed: false },
  //     { id: 2, title: "Task 2", completed: true },
  //     // Add more tasks as needed
  //   ]);
  //   const handleToggle = (taskId) => {
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) =>
  //         task.id === taskId ? { ...task, completed: !task.completed } : task
  //       )
  //     );
  //   };

  //   return (
  //     <div>
  //       <input type="checkbox" checked={task.completed} onToggle={handleToggle} />
  //       <label>{task.title}</label>
  //     </div>
  //   );

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
};

export default Task;

/*
const App = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const requete = await fetch("../dataJson/projects.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setProjects(response);
          const verify = response.find((p) => p.id === id);

          if (verify === undefined) {
            setError(true);
          }
         //
        }
      } catch (e) {
      //  console.log(e);
      }
    };
    fetchProjects();
  }, [id]);
  console.log(projects)

  const initialTasks = [
    { id: 1, title: "Tâche 1", completed: false },
    { id: 2, title: "Tâche 2", completed: false },
    { id: 3, title: "Tâche 3", completed: false },
    { id: 4, title: "Tâche 4", completed: false },
  ];
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const progress =
    (tasks.filter((task) => task.completed).length / tasks.length) * 100;

  return (
    <section>
      <div>
        {projects
          .filter((project) => project.id === id)
          .map((project) => (
            <h6 className="project__title" key={project.id}>
              {project.title}
            </h6>
          ))}

      </div>

      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={handleToggle} />
        ))}
        <div style={{ marginTop: "20px" }}>
          <progress value={progress} max="100"></progress>
          <span style={{ marginLeft: "10px" }}>{`${progress.toFixed(
            2
          )}% complet`}</span>
        </div>
      </div>
    </section>
  );
};

export default App;

*/
