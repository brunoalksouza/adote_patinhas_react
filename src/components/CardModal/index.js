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
      {/* <div className="modal-modal">
        <div className="modal-modal-container">
          <div className="modal-info-modal-container">
            <img
              className="modal-modal-image"
              src={props.pet.foto}
              alt="Foto Mayllon"
            />

            <div>
              <div className="modal-text-modal-main">
                <div>Nome: {props.pet.nome}</div>
                <div>
                  <GoLocation color="#5A3938" /> {props.pet.distancia}
                </div>
              </div>
              <ul className="modal-text-modal-container">
                <li className="modal-text-modal-left">Raça: {props.pet.raca}</li>
                <li className="modal-text-left">
                  Vacinado: {props.pet.vacinado}
                </li>
                <li className="modal-text-modal-right">
                  Idade: {props.pet.idade}
                </li>
                <li className="modal-text-modal-right">
                  Castrado: {props.pet.castrado}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="add-modal-information">
        <div>{props.pet.descricao}</div>
        <div className="contact-modal-sex-box">
          <div className="contact-modal">
            <div>E-mail: {props.pet.email}</div>
            <div className="tel-modal">Telefone: {props.pet.telefone}</div>
          </div>
          <div className="sex-modal">
            <div>{props.pet.sexo}</div>
          </div>
        </div>
      </div> */}
      <div className="modal-container">
        <div className="infos-container">
          <img
            className="modal-image"
            src={props.pet.foto}
            alt="Foto Mayllon"
          />

          <div className="modal-text-main">
            <div className="modal-text-left">Nome: {props.pet.nome}</div>
            <div className="modal-text-left">
              <GoLocation />
              <span>{props.pet.distancia}</span>
            </div>
          </div>
          <ul className="modal-text-container">
            <li className="modal-text-left">Raça: {props.pet.raca}</li>
            <li className="modal-text-right">Idade: {props.pet.idade}</li>
            <li className="modal-text-left">Vacinado: {props.pet.vacinado}</li>
            <li className="modal-text-right">Castrado: {props.pet.castrado}</li>
            <li className="modal-text-left">
              Descrição: {props.pet.descricao}
            </li>
            <li className="modal-text-left">Porte: {props.pet.porte}</li>
            <li className="modal-text-left">E-mail: {props.pet.email}</li>
            <li className="modal-text-left">Telefone: {props.pet.telefone}</li>
          </ul>
        </div>
        <button
          className="card-button"
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
