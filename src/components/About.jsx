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
          Red Axes, Moscoman, Soda Fabric, Autarkic, Chicos de nazca, Häxxan,
          Cherry bandora, Avishag cohen rodrigues, Neta Polturak , Paul arambula
          and more...
          <br />
          <br />
          In the past years, alongside touring across Europe, I wrote music for
          theater, art exhibition and a video game, as well produced dubbing art
          for various projects. I've founded 'Solarium', events and content
          production in Berlin, and Maakuda record label. I've produced other
          musicians in their musical quest to their album. I also teach Bass
          guitar and Ableton Live software in my place in Neukölln or remote via
          Skype.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
