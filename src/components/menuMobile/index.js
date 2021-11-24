import React, { useEffect, useState } from "react";
import './index.scss';

export const MenuMob = () => {

  const [isOpen, setIsOpen] = useState(false)

 const openMenu = () => {
  setIsOpen(!isOpen)
 }

    return(
        <header className="menuMobContainer">
          <div className = "burguerMenu" onClick={openMenu}>
              <div></div>
              <div></div>
              <div></div>
          </div>
          
          <aside className={isOpen ? 'open asideMobMenu' : 'asideMobMenu'}>
            <a href="/"><img src="./img/leadster-logo.svg"/></a>

            <div>
                <a href="/">Sobre</a>
                <a href="/photos">Galeria</a>
            </div>
          </aside>
        </header>
    )
}