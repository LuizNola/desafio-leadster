import React, { useEffect, useState } from "react";
import './index.scss';

export const Menu = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() =>{
        const scrollListener = () =>{
          if(window.scrollY > 10){
            setScrolled(true)
          }else{
            setScrolled(false)
          }
        }
    
        window.addEventListener('scroll',scrollListener)
    
        return() => {
          window.removeEventListener('scroll',scrollListener)
        }
      },[])

    return(
        <header className={scrolled ? 'scrolled menuContainer' : 'menuContainer'}>
          <div className="menuFlex">
              <a href="/"><img src="./img/leadster-logo.svg"/></a>

              <div>
                  <a href="/">Sobre</a>
                  <a href="/photos">Galeria</a>
            </div>
          </div>
        </header>
    )
}