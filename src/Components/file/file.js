import React, { useState, useEffect } from "react";
import { tasks as initialTasks } from "../../data/dataJob"; // Import des tâches depuis le fichier data.js

function JobTasks() {
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [filter, setFilter] = useState("all"); // Filtrer les tâches (tout, complété, non complété)

  // Initialiser les tâches à partir de data.js au chargement du composant
  useEffect(() => {
    setTasks(initialTasks[0].tasks); // Nous supposons que vous voulez récupérer les tâches du premier projet (tasks[0].tasks)
  }, []);

  // Fonction pour marquer une tâche comme terminée
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Fonction pour filtrer les tâches
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // "all" -> retourne toutes les tâches
  });

  return (
    <div id="job">
      <h1>Plan d'Action de Recherche d'Emploi</h1>

      {/* Filtrage des tâches */}
      <div>
        <button onClick={() => setFilter("all")}>Tout</button>
        <button onClick={() => setFilter("completed")}>Complété</button>
        <button onClick={() => setFilter("incomplete")}>Non Complété</button>
      </div>

      {/* Liste des tâches */}
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <span>{task.title}</span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed
                ? "Marquer comme non complété"
                : "Marquer comme complété"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobTasks;
