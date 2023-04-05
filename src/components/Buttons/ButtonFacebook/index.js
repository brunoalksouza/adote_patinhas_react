import { FaFacebook } from "react-icons/fa";

import "./styles.css";
const ButtonFacebook = () => {
  return (
    <button>
      <FaFacebook
        size={40}
        style={{
          color: "#1877F2",
        }}
      />
      <h2>Entrar com Facebook</h2>
    </button>
  );
};

export default ButtonFacebook;
