import florentina from "../../img/users/florentina-de-jesus.png";
import { IconContext } from "react-icons";
import { BiLogOut } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import "./CardUser.css";

const user = [
    {
        photo: florentina,
        name: 'Florentina de Jesus',
        email: 'florentina@gmail.com',
        telephone: '(00) 00000-0000',
    }
]

const CardUser = () => {
    return (
        <>
            {user.map((userData) => (
                <div className="card" key={userData.id}>
                    <img className="photo" alt="Foto do usuário" src={userData.photo} />
                    <h3>Nome:</h3>
                    <div className="TextBox">{userData.name}</div>
                    <h3>E-mail:</h3>
                    <div className="TextBox">{userData.email}</div>
                    <h3>Telefone:</h3>
                    <div className="TextBox">{userData.telephone}</div>
                    <div className="footer">
                        <div className="logout">
                            <a href="#">Sair da conta</a>
                            <IconContext.Provider value={{ size: 25, color: "#5A3938", className: "global-class-name" }}>
                                <div>
                                    <BiLogOut />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="delete">
                            <a href="#">Excluir conta</a>
                            <IconContext.Provider value={{ size: 25, color: "#5A3938", className: "global-class-name" }}>
                                <div>
                                    <RiDeleteBin6Line />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardUser;