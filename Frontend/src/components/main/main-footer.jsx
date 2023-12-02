export default function MainFooter(){
    return(
        <>
        <footer className="footer my-5">
            <div className="container border border-success my-lg-5">
                <div className="row">
                    <div className="col-md-4 footer__column">
                        <ul><h4>OUR COMPANY</h4>
                            <li>Azan Media</li>
                            <li>Why us</li>
                            <li>News & Events</li>
                            <li>Careers</li>
                            <li>LiveTv</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer__column">
                        <ul><h4>NUESTROS PRODUCTOS</h4>
                            <li>Channels</li>
                            <li>Azamtv Box</li>
                            <li>Dealers</li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer__column">
                    <ul><h4>CUIDADO PERSONALIZADO</h4>
                            <li>FAQs</li>
                            <li>Feedback Form</li>
                            <li>COntact Us</li>
                            <li>Pay Now</li>
                        </ul>
                    </div>
                </div>
                <div className="row footer__copy px-auto">
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