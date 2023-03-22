import { useState } from "react";
import { GoLocation } from "react-icons/go";

import ReactModal from "react-modal";
import "./styles.css";

const CardModal = (props) => {
  const [changeButton, setChangeButton] = useState(true);

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onCloseModal}
      shouldCloseOnOverlayClick={true}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-container">
        <div className="informations-container">
          <div className="card-informations">
            <img
              className="modal-image"
              src={props.pet.foto}
              alt="Foto Mayllon"
            />

            <div className="modal-text-container">
              <div
                style={{
                  marginBottom: "15px",
                  fontSize: "20px",
                }}
              >
                Nome: {props.pet.nome}
              </div>
              <div>
                <GoLocation />
                <span>{props.pet.distancia}</span>
              </div>
              <div>Raça: {props.pet.raca}</div>
              <div>Idade: {props.pet.idade}</div>
              <div>Vacinado: {props.pet.vacinado}</div>

              <div>Castrado: {props.pet.castrado}</div>
            </div>
            <button
              className="modal-button-card"
              onClick={() => {
                setChangeButton(!changeButton);
                console.log(JSON.stringify(props.pet), changeButton);
              }}
              style={{ backgroundColor: changeButton ? "#516953" : "#5A3938" }}
            >
              {changeButton ? "Tenho interesse" : "Remover"}
            </button>
          </div>
          <div className="additional-informations">
            <div className="modal-description">
              Descrição: {props.pet.descricao}
            </div>
            <div className="modal-additional-text">
              <div>E-mail: {props.pet.email}</div>
              <div>Telefone: {props.pet.telefone}</div>
              <div>Porte: {props.pet.porte}</div>
              <div>Sexo: {props.pet.sexo}</div>
            </div>
          </div>
        </div>
        <button
          className="modal-button"
          onClick={() => {
            setChangeButton(!changeButton);
            console.log(JSON.stringify(props.pet), changeButton);
          }}
          style={{ backgroundColor: changeButton ? "#516953" : "#5A3938" }}
        >
          {changeButton ? "Tenho interesse" : "Remover"}
        </button>
      </div>
    </ReactModal>
  );
};

export default CardModal;
