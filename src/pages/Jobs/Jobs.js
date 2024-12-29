import React, { useState } from "react";
import { tasks } from "../../data/dataJob";

function Jobs() {
  const [task, setTask] = useState(""); // Pour capturer les nouvelles tâches
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [filter, setFilter] = useState("all"); // Filtrer les tâches (tout, complété, non complété)

  // Fonction pour ajouter une nouvelle tâche
  const addTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          text: task,
          completed: false,
        },
      ]);
      setTask(""); // Réinitialise le champ de saisie
    }
  };

  // Fonction pour marquer une tâche comme terminée
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
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

      {/* Formulaire pour ajouter une tâche */}
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Ajoutez une nouvelle tâche..."
        />
        <button onClick={addTask}>Ajouter</button>
      </div>

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
            <span>{task.text}</span>
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

export default Jobs;
