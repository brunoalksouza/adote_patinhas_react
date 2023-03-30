import React, { useState } from 'react';
import './styles.css';
import {BiMenu,BiX} from "react-icons/bi";
import logo from "../img/logo.svg"

function NavBar() {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='navbar'>
      <div className='sb_navbar'>
        <div className='sb_navbar-links'>
          <div className='sb_navbar-links_logo'>
            <a href="/">
              <img src={logo} className='header-logo'/>
            </a>
          </div>
          <div className='sb_navbar-links_container'>
            <p>
              <a href="/">
                Inicio
              </a>
            </p>
            <p>
              <a href="/">
                Doe um Bichinho
              </a>
            </p>
            <p>
              <a href="/">
                Perfil
              </a>
            </p>
            <p>
              <a href="/">
                Interesses
              </a>
            </p>
            <p>
              <a href="/">
                Nos Apoie
              </a>
            </p>
          </div>
          <div className='sb_navbar-menu'>
            {toggleMenu ? (
              <BiX
              color='#5A3938'
              size={40}
              onClick={()=>setToggleMenu(false)}
              />):(
              <BiMenu
              color='#5A3938'
              size={40}
              onClick={()=>setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className='sb_navebar-menu_container scale-up-center'>
                <div className='sb_navbar-menu_container-links'>
                  <p>
                  <a href="/">Inicio</a>
                  </p>
                  <p>
                    <a href="/">Doe um Bichinho</a>
                  </p>
                  <p>
                    <a href="/">Perfil</a>
                  </p>
                  <p>
                    <a href="/">Interesses</a>
                  </p>
                  <p>
                    <a href="/">Nos Apoie</a>
                  </p>
                </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
