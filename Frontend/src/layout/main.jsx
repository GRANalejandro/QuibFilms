import MainFooter from "../components/main/main-footer";
import MainHeader from "../components/main/main-header";

export default function Main(){
    return(
        <>
            <MainHeader/>

            <main className="main container-fluid p-0">
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

            <MainFooter/>
        </>
    )
}