import React from "react";
import './index.scss'

export const Home = () => {
    

    return(<>
        <main>
            <section className="presentation">
                <h1>Bem vindo ao LeadsterPhotos</h1>
                <div>
                    <p>
                        Esse e um projeto pensado para resolver 
                        o problema proposto na  desafio para dev
                        front end da Leadster
                    </p>
                    <img src="./img/apresent.jpeg"></img>
                </div>
            </section>
            
            <section className="about">
                <h1>Quem e a Leadster?</h1>
                <div>
                    <p>
                    uma plataforma de marketing conversacional completa para aumentar a geração de leads no seu site. Clique no botão ao lado e descubra mais!
                    </p>
                    <a target="_blank" href="#" >VAMOS LA</a>
                </div>
            </section>
        </main>

        </>
    )
}