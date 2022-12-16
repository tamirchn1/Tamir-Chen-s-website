import React from "react";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <h1>Who?</h1>
      <div className=" about-box container d-sm-flex ">
        <img
          alt="tamir Chen"
          className="about-img"
          src={require("../images/me.jpg")}
        />
        <p className="about-txt">
          I am Tamir, I play on various instruments but mostly bass guitar. I
          played/recorded with - <br />
          <a href="https://www.facebook.com/redaxesmusic">Red Axes</a> ,
          <a href="https://www.facebook.com/moscoman">Moscoman</a> ,{""}
          <a href="https://www.facebook.com/search/top?q=soda%20fabric">
            Soda Fabric ,
          </a>
          <a href="https://www.facebook.com/AutarkicAutarkic">Autarkic</a> ,
          <a href="https://www.facebook.com/profile.php?id=100059272549565">
            Chicos de Nazca
          </a>{" "}
          ,<a href="https://www.facebook.com/xhaxxanx">Häxxan</a> ,
          <a href="https://www.facebook.com/hopacherrybandora">
            Cherry Bandora
          </a>{" "}
          ,
          <a href="https://www.facebook.com/THEHOUSEOFLIGHT">House of Light </a>
          ,
          <a href="https://avishagcrodrigues.bandcamp.com/?fbclid=IwAR26DTKDoyOoJW86IBVkc8hGDNL35oLoTbRxjMhJY3uA8mRUPwWasMH0qkY">
            Avishag cohen rodrigues
          </a>{" "}
          ,<a href="https://www.facebook.com/ok.aleklee">Alek Lee</a> ,
          <a href="https://www.facebook.com/NetaPolturak">Neta Polturak</a> ,
          <a href="https://soundcloud.com/paularambula?fbclid=IwAR1QvqSA9RpP-h2YBlbU-Eufkxs8v7Txw6mvQT5fn8FzTLRc5lkUPnleBHg">
            Paul Arambula
          </a>{" "}
          and more...
          <br />
          <br />
          In the past years, alongside touring across Europe, I wrote music for
          theater, art exhibition and a video game, as well produced dubbing art
          for various projects. I've founded{" "}
          <a href="https://www.facebook.com/solariumcrew">'Solarium'</a> ,
          events and content production in Berlin, and{" "}
          <a href="https://maakudarecords.com/"> 'Maakuda'</a> record label.
          I've produced other musicians in their musical quest to their album. I
          also teach Bass guitar and Ableton Live software in my place in
          Neukölln or remote via Skype.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
