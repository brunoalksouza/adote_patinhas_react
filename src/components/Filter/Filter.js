import "./styles.css";
import Dropdown from "../Dropdown/Dropdown";
import React, { useEffect, useState } from "react";

function Filter() {
  const [state, setState] = useState([]);

  const fetchData = () => {
    return fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    )
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const brStates = state.map((stateObj) => stateObj.nome);
  const brStatesId = state.map((stateObj) => stateObj.id);

  const animals = [
    {
      animal: "Cachorro",
    },
    {
      animal: "Gato",
    },
    {
      animal: "Outro",
    },
  ];

  const animalsList = animals.map((animalObj) => ({ label: animalObj.animal }));


  return (
    <main className="filter">
      <div className="filter-container">
        <div className="filter-box">
          <Dropdown
            isSearchable={true}
            placeHolder="UF"
            options={brStates.map((label) => ({ value: label, label }))}
            brStatesId={brStatesId}
          />
          <Dropdown
            isSearchable={true}
            placeHolder="CIDADE"
            options={brStates.map((label) => ({ value: label, label }))}
          />
          <Dropdown placeHolder="ANIMAL" options={animalsList} />
        </div>
      </div>
    </main>
  );
}

export default Filter;
