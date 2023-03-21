import { useState } from "react";
import CardModal from "../CardModal";
import Infos from "../Infos";
import "./styles.css";

const Card = (props) => {
  const [changeButton, setChangeButton] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card-container">
      {/* componente de infos do bicho */}
      <div className="infos-container">
        <div>
          {/* infos padrões do bicho */}
          <Infos pet={props.pet} />
        </div>

        <div>{/* infos adicionais do bicho */}</div>
      </div>

      <button
        className="info-button"
        onClick={() => {
          openModal(props.pet);
        }}
        id="button"
      >
        Ver mais...
      </button>

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
      <CardModal
        pet={props.pet}
        isOpen={modalIsOpen}
        onCloseModal={closeModal}
      />
    </div>
  );
};

export default Card;
