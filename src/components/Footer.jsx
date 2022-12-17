import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSoundcloud,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faTree } from "@fortawesome/free-solid-svg-icons";
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
          target="_blank"
          rel="noreferrer"
          href="whatsapp://send?text=Hello World!&phone=+4917656939369"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          className="btn social-link"
          target="_blank"
          rel="noreferrer"
          href="https://linktr.ee/tamirchen?fbclid=IwAR0UKNLdb-hY92IZJC0bdfZ-zFew-qKY55lU0vKC7I1I9Wh01Tb_0m-bPNc"
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
