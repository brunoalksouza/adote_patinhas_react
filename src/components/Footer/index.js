import React from "react";
import './Footer.css';
import fb from '../../assets/img/social/facebook.svg';
<<<<<<< HEAD
import twitter from '../../assets/img/social/twitter.svg';
import insta from '../../assets/img/social/instagram-alt.svg';


const Footer = () => {
=======
import insta from '../../assets/img/social/instagram-alt.svg';
import twitter from '../../assets/img/social/twitter.svg';


const Footer=()=>{
>>>>>>> origin/profile-screen
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>SOBRE</h4>
                        <a href="/employer">
                            <p>sobre o projeto</p>
                        </a>
                        <a href="/healthplan">
                            <p>nossa equipe</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>POLITICAS</h4>
                        <a href="/resource">
                            <p>privacidade</p>
                        </a>
                        <a href="/resource">
                            <p>responsabilidade</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>APOIE</h4>
                        <a href="/employer">
                            <p>apoie nosso projeto <br></br> no catarse</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>NOSSAS REDES</h4>
                        <div className="socialmedia">
<<<<<<< HEAD
                            <p><img src={fb} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
=======
                            <p><img src={fb} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
>>>>>>> origin/profile-screen
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
<<<<<<< HEAD
                        <p>
                            Feito pela turma de 2021 SENAC Itajubá MG
                        </p>
                    </div>
                </div>

=======
                        <p>Criado pelos alunos do curso Técnico em Desenvolvimento de Sistemas (2021-2023)</p>
                        <p>Senac Minas - Itajubá-MG</p>
                    </div>            
                </div>
>>>>>>> origin/profile-screen
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> origin/profile-screen
