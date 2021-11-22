import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import "../styles/footer.css";

const Footer = () => {
    return(
        <footer className="footer" >
            <h2 className="footer-title feature-font" data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">Be In <br/>Touch</h2>

            <div className="footer-socials" data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">
                <a className="" href="#"><FontAwesomeIcon icon={faFacebookF} size="sm"/></a>
                <a className="" href="#"><FontAwesomeIcon icon={faTwitter} size="sm"/></a>
                <a className="" href="#"><FontAwesomeIcon icon={faInstagram} size="sm"/></a>
            </div>

            <div className="footer-info info primary-font" data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">
                <p className="info-address">500 Terry Francois St San Francisco, CA 94158 </p>
                <p className="info-contact">Tel 123-456-7890, Fax 123-456-7890</p>
                <p className="info-copyright">© 2023 by Architects. Proudly created with Wix.com</p>
            </div>
        </footer>
    )
}


export default Footer;