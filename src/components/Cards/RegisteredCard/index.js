import { useState } from "react";
import CardModal from "../CardModal";
import PetInfos from "../PetInfos";
import "./RegisteredCard.css";

const RegisteredCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
    document.body.classList.add("modal-open");
  }

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="card-container">
      {/* componente de infos do bicho */}
      <div className="infos-container">
        <div>
          {/* infos padrões do bicho */}
          <PetInfos pet={props.pet} />
        </div>

        <div>{/* infos adicionais do bicho */}</div>
      </div>

      <button
        className="card-button"
        onClick={() => {
          openModal(props.pet);
        }}
        style={{ backgroundColor: "#516953" }}
      >
        Detalhes
      </button>
      <CardModal
        pet={props.pet}
        isOpen={modalIsOpen}
        onCloseModal={closeModal}
      />
    </div>
  );
};

export default RegisteredCard;