import { IconContext } from "react-icons";
import { FaFacebook } from 'react-icons/fa';
import ButtonFace from "../Button";

const CardFace = () => {
    return (
        <section className="cardFace">
            <h2>Face</h2>
            <IconContext.Provider value={{ color: "#1877F2", className: "global-class-name" }}>
                <div>
                    <ButtonFace corFundo='#D9D9D9' icon={<FaFacebook size={25}/>}  >ENTRAR COM O FACEBOOK</ButtonFace>
                </div>
            </IconContext.Provider>;
        </section>
    )
}

export default CardFace;