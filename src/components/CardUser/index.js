import { IconContext } from "react-icons";
import { BiLogOut } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import "./CardUser.css";

const user = [
    {
        name: 'Victoria Shirley',
        email: 'victoria@gmail.com',
        telephone: '(00) 00000-0000',
    }
]

const CardUser = () => {
    return (
        <>
            {user.map((userData) => (
                <div className="user-card" key={userData.id}>
                    <img className="user-photo" alt="Foto do usuário" src='https://github.com/VictoriaShirley.png' />
                    <div className="user-form">
                        <h3>Nome:</h3>
                        <div className="user-text-box">{userData.name}</div>
                        <h3>E-mail:</h3>
                        <div className="user-text-box">{userData.email}</div>
                        <h3>Telefone:</h3>
                        <div className="user-text-box">{userData.telephone}</div>
                    </div>
                    <div className="user-footer">
                        <div className="user-logout-link">
                            <a href="#">Sair da conta</a>
                            <IconContext.Provider value={{ size: 25, color: "#5A3938", className: "global-class-name" }}>
                                <div>
                                    <BiLogOut />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className="user-delete-link">
                            <a href="#">Excluir conta</a>
                            <IconContext.Provider value={{ size: 25, color: "#5A3938", className: "user-global-class-name" }}>
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