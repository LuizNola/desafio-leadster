import React from "react";

import {Routes, Route} from 'react-router-dom'
import { Home } from "./pages/home"; 
import { Gallery } from "./pages/gallery"; 
import { Menu } from "./components/menu";
import { MenuMob } from "./components/menuMobile";
import { Footer } from "./components/footer";

export const Routers = () => {
    return(
        <>
            <MenuMob/>
            <Menu/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/photos" element={<Gallery/>}/>
            </Routes>
            <Footer/>
        </>
    )
}