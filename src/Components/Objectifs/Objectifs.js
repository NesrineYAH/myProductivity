import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Objectifs.scss";

const ObjectifListe = () => {
  const localStorageKey = "objectifs";
  // Liste initiale des objectifs
  const objectifsInitiaux = [
    {
      title: "Apprendre le javaScript",
      checked: false,
    },
    {
      title: "Apprendre JAVA",
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

  const loadObjectifsFromLocalStorage = () => {
    try {
      const savedObjectifs = JSON.parse(localStorage.getItem(localStorageKey));
      if (savedObjectifs && Array.isArray(savedObjectifs)) {
        return savedObjectifs;
      }
    } catch (e) {
      console.error("Erreur lors du chargement des objectifs :", e);
    }
    return objectifsInitiaux; // Retourne les objectifs par défaut si une erreur se produit
  };

  // État local pour les objectifs
  const [objectifs, setObjectifs] = useState(loadObjectifsFromLocalStorage);

  // Effet de mise à jour du localStorage chaque fois que les objectifs changent
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(objectifs));
  }, [objectifs]);

  // Fonction pour gérer le changement d'état d'une case à cocher
  const handleCheckboxChange = (index) => {
    const updatedObjectifs = objectifs.map((objectif, i) =>
      i === index ? { ...objectif, checked: !objectif.checked } : objectif
    );
    setObjectifs(updatedObjectifs);
  };

  return (
    <div id="Objectifs">
      <h1>Liste d'Objectifs</h1>
      <ul>
        {objectifs.map((objectif, index) => (
          <li key={index} className="Card">
            <label>
              <input
                type="checkbox"
                checked={objectif.checked} // checked={objectif.checked || false}
                onChange={() => handleCheckboxChange(index)}
              />
              {objectif.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectifListe;
