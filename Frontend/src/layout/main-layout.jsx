import React, { useState, useContext, useEffect } from 'react';

import MainFooter from "../components/main/main-footer";
import MainHeader from "../components/main/main-header";

import axios from 'axios';





export default function MainLayout() {
    

    // Combina las listas de películas
    
    const obRomance = [
        {
            photo: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/07/diario-noa.jpg?tf=1080x',
            description: 'El diario habla de Noah Calhoun y Allie Nelson, unos jóvenes enamorados de Carolina del Norte, de ambientes sociales dispares. Sin embargo, sus familias y la guerra les separarían. Esta es una película de amor que siempre aparece en cualquier ranking, y es lógico.',
            title: 'El diario de Noa',
            clasification: 'R'
        },
        {
            photo: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/06/love-actually.jpg?tf=1080x',
            description: 'Love Actually (2003) se desarrolla en Reino Unido y trata el tema del amor en las vísperas de unas navidades.',
            title: 'Love Actually',
            clasification: 'C'
        },
        {
            photo: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/03/10-peliculas-mas-taquilleras-historia-cine.jpg?tf=1080x',
            description: 'Son unos jóvenes que se conocen en el fatídico trasatlántico y se enamoran. Pero él es un humilde buscavidas y ella una dama de alta sociedad, destinada a contraer votos en una matrimonio que no desea. ',
            title: 'Titanic',
            clasification: 'R'
        },
        {
            photo: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/05/500-dias-juntos-2009.jpg?tf=1080x',
            description: 'La trama gira en torno a Tom y Summer, dos personas diametralmente opuestas, que sin embargo encuentran puntos en común que reforzarán su relación, a la vez que sus estilos de vida les va separando poco a poco.',
            title: '500 días juntos',
            clasification: 'C'
        },
        {
            photo: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/06/pretty-woman.jpg?tf=1080x',
            description: 'Aunque las malas lenguas dicen que ella y su compañero de reparto Richard Gere no se soportaban, y que como la actriz era aún novatilla, dio algún que otro problema.',
            title: 'Pretty Woman',
            clasification: 'R'
        }
    ];

    const obAventura = [
        {
            photo: 'https://cdn.culturagenial.com/es/imagenes/e-t-el-extraterrestre-escena-pelicula.jpg',
            description: ' Cuenta la historia de un extraterrestre perdido en la tierra que se hace amigo de un niño que decide esconderlo en su casa. Junto a sus hermanos, intentarán ayudarlo a que regrese a su planeta antes de que lo encuentre el gobierno.',
            title: 'E.T., el extraterrestre',
            clasification: 'R'
        },
        {
            photo: 'https://cdn.culturagenial.com/es/imagenes/volver-al-futuro-pelicula.jpg',
            description: ' Sigue la historia de Marty McFly, un joven de 17 años que hace amistad con un excéntrico científico que intenta construir una máquina que le permita viajar en el tiempo.',
            title: 'Volver al futuro',
            clasification: 'C'
        },
        {
            photo: 'https://cdn.culturagenial.com/es/imagenes/la-princesa-prometida-pelicula.jpg',
            description: 'Un niño se encuentra guardando reposo y su abuelo lo visita para leerle un libro de aventuras. Aunque al comienzo no parece demasiado interesado, pronto se verá transportado hacia la historia en la que un hombre debe enfrentar todo tipo de desafíos para reencontrarse con su amada.',
            title: ' La princesa prometida',
            clasification: 'C'
        },
        {
            photo: 'https://cdn.culturagenial.com/es/imagenes/the-goonies-pelicula.jpg',
            description: 'Mikey y sus amigos descubren el mapa de un tesoro del siglo XVII en el desván de su casa. Decididos a encontrarlo, se embarcan en una aventura en la que les esperarán muchísimas sorpresas, desafíos y riesgos que lograrán afianzar su amistad.',
            title: 'Los goonies',
            clasification: 'C'
        },
        {
            photo: 'https://cdn.culturagenial.com/es/imagenes/jumanji-pelicula.jpg',
            description: 'Dos chicos se mudan a una nueva casa y descubren un juego de mesa misterioso llamado Jumanji. Cuando deciden probarlo, comienzan a pasar cosas extrañas, como la aparición de un hombre que asegura haber estado 25 años atrapado dentro del juego.',
            title: 'Jumanji',
            clasification: 'R'
        }
    ];

    const obAccion = [
        {
            photo: 'https://es.web.img2.acsta.net/c_310_420/pictures/23/05/30/14/43/4339481.jpg',
            description: 'Filme que cuenta la historia de Tim Ballard (Jim Caviezel): un agente especial para el gobierno de los Estados Unidos. Como parte del Departamento de Seguridad Nacional, opera principalmente contra la ciberdelincuencia contra menores víctimas de delitos sexuales: desde la trata de seres humanos al turismo sexual.',
            title: 'Sound of Freedom',
            clasification: 'R'
        },
        {
            photo: 'https://es.web.img3.acsta.net/c_310_420/pictures/23/02/14/13/02/1985549.jpg',
            description: 'John Wick 4 es la cuarta película de la franquicia de acción en la que Keanu Reeves da vida a un asesino retirado que vuelve a la acción, impulsado por una incontrolable búsqueda de venganza.',
            title: 'John Wick 4',
            clasification: 'R'
        },
        {
            photo: 'https://es.web.img3.acsta.net/c_310_420/pictures/23/04/27/15/42/3990293.jpg',
            description: 'Gira en torno a unos robots extraterrestres conocidos como Autobots, que se ocultan en la Tierra transformándose en coches y otros automóviles.',
            title: 'Transformers: El despertar de las bestias',
            clasification: 'R'
        },
        {
            photo: 'https://es.web.img3.acsta.net/c_310_420/pictures/18/03/16/15/33/3988420.jpg',
            description: 'Un nuevo peligro acecha procedente de las sombras del cosmos. Thanos, el infame tirano intergaláctico, tiene como objetivo reunir las seis Gemas del Infinito, artefactos de poder inimaginable, y usarlas para imponer su perversa voluntad a toda la existencia.',
            title: 'Vengadores: Infinity War',
            clasification: 'R'
        },
        {
            photo: 'https://es.web.img3.acsta.net/c_310_420/pictures/21/05/26/17/45/4238572.jpg',
            description: 'En un futuro cercano, en el que la humanidad está perdiendo una guerra contra alienígenas invasores. Un hombre del pasado es reclutado para luchar en una guerra futura, en la que el destino de la humanidad depende de su capacidad para enfrentarse a los fantasmas de su pasado.',
            title: 'La guerra del mañana',
            clasification: 'R'
        }
    ];

    const buscarPorInput = () => {
        const resultados = allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          movie.clasification.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredMovies(resultados);
      };



    // Ejecuta la búsqueda cuando el valor del input cambia






    // if Value.include(obAventura.title) && Value.include(obAventura.clasification)
    const [isInputActive, setIsInputActive] = useState(false);


    const handleInputFocus = () => {
        setIsInputActive(true);
      };
    
      const handleInputBlur = () => {
        setIsInputActive(false);
      };
    

    return (
        <>

            <MainHeader />
            <input
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            <main className="main container-fluid p-0">
                <section className={`modal-input ${isInputActive ? 'active' : ''}`}>

                </section>
                <section className="background container-fluid p-0 border">
                    <article className="background__item"></article>
                    <article className="background__item"></article>
                </section>
                <section className="movies container p-0 border">
                    <article className="movies__content">
                        <span className="movies__content__text">
                            Tendencias
                        </span>
                        <div className="movies__content__previews">
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                        </div>
                    </article>
                    <article className="movies__content">
                        <span className="movies__content__text">
                            Las 10 peliculas Mas vistas Hoy
                        </span>
                        <div className="movies__content__previews">
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                        </div>
                    </article>
                    <article className="movies__content">
                        <span className="movies__content__text">
                            Las mas Buscadas
                        </span>
                        <div className="movies__content__previews">
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                        </div>
                    </article>
                    <article className="movies__content">
                        <span className="movies__content__text">
                            Kids
                        </span>
                        <div className="movies__content__previews">
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                        </div>
                    </article>
                    <article className="movies__content">
                        <span className="movies__content__text">
                            Tendencias
                        </span>
                        <div className="movies__content__previews">
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                            <div className="movies__content__previews__item"></div>
                        </div>
                    </article>
                </section>
                <section className="page-images container-fluid">
                    <div className="article page-images__item"></div>
                    <div className="article page-images__item"></div>
                </section>
            </main>

            <MainFooter />

        </>
    )
}