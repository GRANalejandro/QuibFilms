import React { useState } from 'react';

export default function Preference(){
    const [selectedCategories, setSelectedCategories] = useState([]);

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
                        <div className="preferences__content__category__items" onClick={() => handleCategoryClick('Aventura')}>Aventura</div>
                        <div className="preferences__content__category__items" onClick={() => handleCategoryClick('Accion')}>Accion</div>
                        <div className="preferences__content__category__items" onClick={() => handleCategoryClick('Romance')}>Romance</div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                    </article>
                    <article className="preferences__content__category container">
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                    </article>
                    <article className="preferences__content__category">
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                    </article>
                </section>
                <div className="section preferences__content">
                    <button className="preferences__content__button">
                        Siguiente
                    </button>
                </div>
            </main>
        </>
    )
}