import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Terror1 from '../img/terror-1.jpeg';
import Terror2 from '../img/terror-2.jpeg';
import Terror3 from '../img/terror-3.jpeg';
import Aventure1 from '../img/aventure-1.jpeg';
import Aventure2 from '../img/aventure-2.jpeg';
import Aventure3 from '../img/aventure-3.jpeg';
import Comedia1 from '../img/comedia-1.jpeg';
import Comedia2 from '../img/comedia-2.jpeg';
import Comedia3 from '../img/comedia-3.jpeg';

export default function Preference(){
    const [selectedCategories, setSelectedCategories] = useState([]);

    const navigate = useNavigate();
    // Manejador de clic para agregar la categoría al array
    const handleCategoryClick = (category) => {
        setSelectedCategories(prevCategories => {
          if (!prevCategories.includes(category)) {
            return [...prevCategories, category];
          }
          return prevCategories;
        });
        console.log(selectedCategories)
    };

    return(
        <>
            <main className="preferences container p-0">
                <section className="preferences__content">
                    <span className="preferences__content__text">
                        Elige tus Categorias favoritas
                    </span>
                </section>
                <section className="preferences__content">
                    <article className="preferences__content__category">
                        <div className="preferences__content__category__items" onClick={() => handleCategoryClick('Aventura')}><img src={Terror1}/></div>
                        <div className="preferences__content__category__items" onClick={() => handleCategoryClick('Accion')}><img src={Aventure1}/></div>
                        <div className="preferences__content__category__items" onClick={() => handleCategoryClick('Romance')}><img src={Comedia1}/></div>
                    </article>
                    <article className="preferences__content__category container">
                        <div className="preferences__content__category__items"><img src={Terror2}/></div>
                        <div className="preferences__content__category__items"><img src={Aventure2}/></div>
                        <div className="preferences__content__category__items"><img src={Comedia2}/></div>

                    </article>
                    <article className="preferences__content__category">
                        <div className="preferences__content__category__items"><img src={Terror3}/></div>
                        <div className="preferences__content__category__items"><img src={Aventure3}/></div>
                        <div className="preferences__content__category__items"><img src={Comedia3}/></div>

                    </article>
                </section>
                <div className="section preferences__content">
                    <button className="preferences__content__button" >
                        Siguiente
                    </button>
                </div>
            </main>
        </>
    )
}