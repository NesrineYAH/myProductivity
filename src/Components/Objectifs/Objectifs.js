import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Objectifs.scss";

const Objectifs = () => {
  const [objectifs, setObjectifs] = useState([
    { id: 1, title: "English Speak", completed: false },
    { id: 2, title: "English Writing", completed: false },
  ]);

  const { id } = useParams();

  const handleToggle = (objectifId) => {
    setObjectifs((prevObjectifs) =>
      prevObjectifs.map((objectif) =>
        objectif.id === objectifId
          ? { ...objectif, completed: !objectif.completed }
          : objectif
      )
    );
  };

  return (
    <div id="Objectifs">
      <ul>
        {objectifs.map((objectif) => (
          <li className="Card" key={objectif.id}>
            <input
              type="checkbox"
              checked={objectif.completed}
              onChange={() => handleToggle(objectif.id)}
            />
            <label className="objecTtile">{objectif.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Objectifs;
