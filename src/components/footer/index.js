import React from "react";
import './index.scss'

export const Footer = () => {

    return(
        <footer>
            <div>
                <h3>Links Principais</h3>
                <dl>
                    <dd><a href="/">Sobre</a></dd>
                    <dd><a href="/photos">Galeria</a></dd>
                </dl>
            </div>
            <div>
                <h3>Links Leadster</h3>
                <dl>
                    <dd><a target="_blank"  href="https://leadster.com.br/">Site Oficial</a></dd>
                    <dd><a target="_blank" href="https://leadster.com.br/blog/">Blog</a></dd>
                </dl>
            </div>
            <div>
                <h3>Feito Por:</h3>
                <dl>
                    <dd>José Luiz Nola Santos</dd>
                    <dd><a target="_blank" href="https://github.com/LuizNola">Github</a></dd>
                </dl>
            </div>
        </footer>
    )
}