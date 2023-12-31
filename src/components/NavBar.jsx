import { useState } from "react";

function NavBar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Navbar"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#aside"
            aria-controls="aside"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse justify-content-md-center collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Sistema de Gestión de Recursos Humanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
