import React, { useEffect, useState } from "react";
import { ModelImg } from "./components/imgModel";
import { createClient } from 'pexels';

import './index.scss'

export const Gallery = () => {

    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(null)
    const [query, setQuery] = useState("Nature")

    const client = createClient('CHAVE DA API AQUI');

    const changeQuery = queryName => {
        setPhotos([])
        setMaxPage(null)
        setPage(1)
        setQuery(queryName)
    }

    useEffect(async ()=>{    
        if(maxPage >= page || maxPage == null){
            await client.photos.search({ query: query, per_page: 20, page: page })
            .then((photos) => {
                if (maxPage == null){
                    setMaxPage(photos.total_results/20)
                }
                return(photos.photos)})
            .then((newphotos) => setPhotos((prevPhotos) =>  [...prevPhotos, ...newphotos]));
        }
        
    }, [page])
    
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries)=>{
            if(entries.some((entry) => entry.isIntersecting)){
                setPage((pageInsideState)=>pageInsideState +1)
            }
        })
        
        intersectionObserver.observe(document.querySelector("#ward"))
    }, [])

    return(
            
            <section className="galleryContainer">
                <div className="queryMenu">
                    <p onClick={()=>changeQuery('Nature')}>Natureza</p>
                    <p onClick={()=>changeQuery('Ocean')}>Oceano</p>
                    <p onClick={()=>changeQuery('Tigers')}>Tigres</p>
                    <p onClick={()=>changeQuery('Pears')}>Perás</p>
                </div>

                <div className="photosList">
                    {photos.map((i, k)=> <ModelImg photos={i}/>)}
                </div>
                
                <ul id="ward"/>
            </section>

    )
}