import React from "react";
import Footer from "./Footer";
function Listen() {
  return (
    <div>
      <h1>Listen</h1>
      <div className="spotify-playlists">
        <iframe
          title="Tamir Hassan - Guitarot ('age of self records')"
          src="https://open.spotify.com/embed/artist/5GAlAqBYJm6Z9ObOGzbMNc?utm_source=generator"
          width="40%"
          height="380"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="Soda Fabric - Atlantis ('anova records')"
          src="https://open.spotify.com/embed/artist/67UmOoYhiwaR3s6pXSOuPk?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="Projects i played in"
          src="https://open.spotify.com/embed/playlist/1aG16COXzqNLuQbrt37F1d?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="Tarim - Saloon rave ('Full body massage records')"
          src="https://open.spotify.com/embed/album/4BnuQkJetEXgIE68N20Ndo?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Listen;
