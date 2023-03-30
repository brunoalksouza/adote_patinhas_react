import { FcGoogle } from 'react-icons/fc';
import ButtonGoogle from "../Button";

const CardGoogle = () => {
    return (
        <section className="cardGoogle">
            <h2>Google</h2>
            <div>
                <ButtonGoogle corFundo='#D9D9D9' icon={<FcGoogle size={25}/>}>ENTRAR COM O GOOGLE</ButtonGoogle>
            </div>
        </section>
    )
}

export default CardGoogle;
