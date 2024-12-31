import React, { useState, useEffect } from "react";

function Job() {
  const [task, setTask] = useState(""); // Pour capturer les nouvelles tâches
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [filter, setFilter] = useState("all"); // Filtrer les tâches (tout, complété, non complété)

  // Fonction pour ajouter une nouvelle tâche
  const addTask = () => {
    if (task.trim()) {
      const newTask = {
        id: tasks.length + 1,
        text: task,
        completed: false,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Sauvegarde dans le localStorage
      setTask(""); // Réinitialise le champ de saisie
    }
  };

  // Fonction pour marquer une tâche comme terminée
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Met à jour dans le localStorage
  };
  // Fonction pour supprimer une tâche
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); // Supprime la tâche en fonction de son id
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Met à jour dans le localStorage
  };
  // Fonction pour filtrer les tâches
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    if (filter === "inprogress") return !task.completed;

    return true; // "all" -> retourne toutes les tâches
  });

  // Charger les tâches depuis le localStorage au démarrage de l'application
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // Charger les tâches depuis le localStorage
    }
  }, []);

  const handlechecking = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Met à jour dans le localStorage
  };

  // État pour gérer l'ouverture du modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <div id="Bouttons">
        <button onClick={() => setFilter("all")}>Tout</button>
        <button onClick={() => setFilter("completed")}>Complété</button>
        <button onClick={() => setFilter("incomplete")}>Non Complété</button>
        <button onClick={() => setFilter("inprogress")}>En cours</button>
      </div>

      {/* Liste des tâches */}
      <div>
        {filteredTasks.map((task) => (
          <div>
            <h3>{task.text}</h3>
            <input
              placeholder="Name"
              key={task.id}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => handlechecking(task.id)} // Ajout du onClick ici
            />
            <input type="text" placeholder="Tache" />
            <input type="text" placeholder="statut" />
            <input type="text" placeholder="Remarque" onClick={openModal} />
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "complété" : "Non complété"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </div>
        ))}
      </div>

      {/* Le modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Ouvert !</h2>
            <p>Ecrivez vos remarques .</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Job;
