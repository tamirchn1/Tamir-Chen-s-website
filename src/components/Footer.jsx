import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSoundcloud,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="footer">
      <div className="social-logos text-center">
        <a
          className="btn  social-link"
          target="_blank"
          rel="noreferrer"
          href="https://soundcloud.com/tamir-chen"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
        <a
          className="btn social-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/tamir_hassan_/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="btn social-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/tamir.chen.1"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          className="btn social-link"
          href="whatsapp://send?text=Hello World!&phone=+4917656939369"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
