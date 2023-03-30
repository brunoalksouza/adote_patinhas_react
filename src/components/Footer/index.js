import React from "react";
import './styles.css';
// import fb from '../../Assets/facebook.svg'
// import twitter from '../../Assets/twitter.svg'
// import insta from '../../Assets/instagram-alt.svg'



const Footer=()=>{
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
                            <p><img src='/img/social/facebook.svg' alt=""/></p>
                            <p><img src='/img/social/instagram-alt.svg' alt=""/></p>
                            <p><img src='/img/social/twitter.svg' alt=""/></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            Feito pela turma de 2021 SENAC Itajubá MG
                        </p>
                </div>            
            </div>
            
                </div>
            </div>
    )
}

export default Footer;
