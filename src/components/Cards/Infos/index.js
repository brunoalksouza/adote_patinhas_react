import { GoLocation } from "react-icons/go";

import "./Infos.css";

const Infos = (props) => {
  return (
    <div className="infos-container">
      <img className="card-image" src={props.pet.foto} alt="Foto Mayllon" />

      <div>
        <div className="card-text-main">
          <div className="card-text-left">Nome: {props.pet.nome}</div>
          <div className="card-text-left">
            <GoLocation />
            <span>{props.pet.distancia}</span>
          </div>
        </div>
        <ul className="card-text-container">
          <li className="card-text-left">Raça: {props.pet.raca}</li>
          <li className="card-text-left">Vacinado: {props.pet.vacinado}</li>
          <li className="card-text-right">Idade: {props.pet.idade}</li>
          <li className="card-text-right">Castrado: {props.pet.castrado}</li>
        </ul>
      </div>
    </div>
  );
};

export default Infos;