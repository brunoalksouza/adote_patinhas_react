import { GoLocation } from "react-icons/go";

import ReactModal from "react-modal";
import "./styles.css";

const CardModal = (props) => {
  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onCloseModal}
      shouldCloseOnOverlayClick={true}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="card-modal">
        {/* <Card  pet={props.pet} /> */}

        <div className="card-modal-container">
          <div className="card-info-modal-container">
            <img
              className="card-modal-image"
              src={props.pet.foto}
              alt="Foto Mayllon"
            />

            <div>
              <div className="card-text-modal-main">
                <div>Nome: {props.pet.nome}</div>
                <div>
                  <GoLocation color="#5A3938" /> {props.pet.distancia}
                </div>
              </div>
              <ul className="card-text-modal-container">
                <li className="card-text-modal-left">Raça: {props.pet.raca}</li>
                <li className="card-text-left">
                  Vacinado: {props.pet.vacinado}
                </li>
                <li className="card-text-modal-right">
                  Idade: {props.pet.idade}
                </li>
                <li className="card-text-modal-right">
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
      </div>
    </ReactModal>
  );
};

export default CardModal;
