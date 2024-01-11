import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Objectifs.scss";

const ObjectifListe = () => {
  // Utilisez le localStorage pour stocker et récupérer les données
  const localStorageKey = "objectifs";
  // Définissez des objectifs initiaux si le localStorage est vide
  const objectifsInitiaux = [
    {
      title: "Apprendre bien le javaScript",
      checked: false,
    },
    {
      title: "Apprendre Python",
      checked: false,
    },
    {
      title: "Apprendre Angluar",
      checked: false,
    },
    {
      title: "speak english fluently",
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
