export default function MainHeader(){
    return(
        <header className="header">
            <div className="container-header">
                <div className="logo"></div>
                <div className="input"></div>
            </div>
            <div className="container-header">
                <nav className="menu">
                    <ul className="menu__content">
                        <li className="menu__content__item">Inicio</li>
                        <li className="menu__content__item">Peliculas</li>
                        <li className="menu__content__item">Iniciar Sesion</li>
                        <li className="menu__content__item">Registrarse</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}