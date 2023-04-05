import "./PetInfos.css";

const PetInfos = (props) => {
  return (
    <div className="infos-container">
      <img className="card-image" src={props.pet.foto} alt="Foto Mayllon" />

      <ul className="card-text-container">
        <li className="card-text-left">Nome: {props.pet.nome}</li>
        <li className="card-text-left">Sexo: {props.pet.sexo}</li>
      </ul>
    </div>
  );
};

export default PetInfos;