import React from "react";
import Footer from "./Footer";

function Home() {
  return (
    <div className="container home-screen">
      <div className="spans">
        <span className="home-text home-1">Tamir Chen</span> <br />
        <span className="home-text home-2">Bass player &amp; teacher</span>
        <br />
        <span className="home-text home-3">Music Producer</span>
      </div>
      <img
        alt="tamir Chen"
        className="home-img"
        src={require("../images/home.jpg")}
      />
      <Footer />
    </div>
  );
}

export default Home;
