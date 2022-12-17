import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand btn" href="/">
          Tamir Chen
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link btn " href="/about">
                About
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle btn"
                href="/music"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Music
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item btn" href="/listen">
                  Listen
                </a>
                <a class="dropdown-item btn" href="/vids">
                  Video Clips
                </a>
                <a class="dropdown-item btn" href="/gigs">
                  Live Shows
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
