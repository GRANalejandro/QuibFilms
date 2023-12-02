//Import icons network
import Youtube from '..//../img/icons/youtube.png'
import Facebook from '..//../img/icons/facebook.png'
import Twitter from '..//../img/icons/twitter.png'
import Instagram from '..//../img/icons/instagram.png'

export default function MainFooter(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__redes text-center">
                        <img src={Youtube}/>
                        <img src={Facebook}/>
                        <img src={Twitter}/>
                        <img src={Instagram}/>
                    </div>
                    <div className="row">
                        <div className="col-md-4 footer__column">
                            <ul>
                                <h4>OUR COMPANY</h4>
                                <li>Azan Media</li>
                                <li>Why us</li>
                                <li>News & Events</li>
                                <li>Careers</li>
                                <li>LiveTv</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer__column">
                            <ul>
                                <h4>NUESTROS PRODUCTOS</h4>
                                <li>Channels</li>
                                <li>Azamtv Box</li>
                                <li>Dealers</li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer__column">
                            <ul>
                                <h4>CUIDADO PERSONALIZADO</h4>
                                <li>FAQs</li>
                                <li>Feedback Form</li>
                                <li>COntact Us</li>
                                <li>Pay Now</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row footer__copy px-auto bg-lt py-md-3">
                        <div className="col-md-5 lg-6">
                            <span>@2023 QuibFilms All right reserved</span>
                        </div>
                        <div className="col-md-7 lg-6">
                            <span>Terms of Use | Privacity policy | Contact Us | Careers</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}