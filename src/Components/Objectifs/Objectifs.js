import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Objectifs.scss";

/*const Objectifs = () => {
  const [objectifs, setObjectifs] = useState([
    { id: 1, title: "English Speak", completed: false },
    { id: 2, title: "English Writing", completed: false },
  ]);
  const handleToggle = (objectifId) => {
    setObjectifs((prevObjectifs) =>
      prevObjectifs.map((objectif) =>
        objectif.id === objectifId
          ? { ...objectif, completed: !objectif.completed }
          : objectif
      )
    );
  };

  useEffect(() => {
    // Lorsque l'état change
    localStorage.setItem("objectifs", JSON.stringify(objectifs));
  }, [objectifs]);

  useEffect(() => {
    // Lors du chargement de la page
    const storedObjectifs = JSON.parse(localStorage.getItem("objectifs")) || [];
    if (storedObjectifs) {
      setObjectifs(storedObjectifs);
    }
  }, []);
  // Fonction pour gérer le changement d'état d'une case à cocher
  const handleCheckboxChange = (index) => {
    const updatedObjectifs = [...objectifs];
    updatedObjectifs[index].checked = !updatedObjectifs[index].checked;
    setObjectifs(updatedObjectifs);
  };

  return (
    <div id="Objectifs">
      <h1>MY OB   <div id="Objectifs">JECTIVES </h1>
      <ul>
        {objectifs.map((objectif) => (
          <li className="Card" key={objectif.id}>
            <input
              type="checkbox"
              checked={objectif.completed}
              onChange={() => handleToggle(objectif.id)}
            />
            <label className="objectTitle">{objectif.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Objectifs;
*/

const ObjectifListe = () => {
  // Utilisez le localStorage pour stocker et récupérer les données
  const localStorageKey = "objectifs";
  // Définissez des objectifs initiaux si le localStorage est vide
  const objectifsInitiaux = [
    {
      title: "Provement to Manel",
      checked: false,
    },
    {
      title: "Buy a house",
      checked: false,
    },
    {
      title: "buy a car",
      checked: false,
    },
    {
      title: "speak english fluently",
      checked: false,
    },
    {
      title: "Find a work",
      checked: false,
    },
    {
      title: "Going to omra ",
      checked: false,
    },
  ];

  const savedObjectifs =
    JSON.parse(localStorage.getItem(localStorageKey)) || objectifsInitiaux;

  // État local pour les objectifs
  const [objectifs, setObjectifs] = useState(savedObjectifs);

  // Effet de mise à jour du localStorage chaque fois que les objectifs changent
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(objectifs));
  }, [objectifs]);

  // Fonction pour gérer le changement d'état d'une case à cocher
  const handleCheckboxChange = (index) => {
    const updatedObjectifs = [...objectifs];
    updatedObjectifs[index].checked = !updatedObjectifs[index].checked;
    setObjectifs(updatedObjectifs);
  };

  return (
    <div id="Objectifs">
      <h1>Liste d'Objectifs</h1>
      <ul>
        {objectifs.map((objectif, index) => (
          <li key={index} className="Card">
            <input
              type="checkbox"
              checked={objectif.checked || false}
              onChange={() => handleCheckboxChange(index)}
            />
            {objectif.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectifListe;
