import '../scss/components/preference.scss';

export default function Preference(){
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
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
                        <div className="preferences__content__category__items"></div>
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