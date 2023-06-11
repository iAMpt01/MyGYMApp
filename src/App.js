import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Gym/Home";
import Input from "./components/Input";
import Prog from "./Gym/Prog";
import { Fragment } from "react";
import Antrenori from "./Gym/Antrenor";
import { Link } from "react-router-dom";
import About from "./Gym/About";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              BodyWorks
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Acasă
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/About">
                    Despre Noi
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Antrenor">
                    Antrenor
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Input">
                    Fa o programare
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Prog">
                    Programele noastre
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div class="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Antrenor" element={<Antrenori />} />
            <Route path="/Input" element={<Input />} />
            <Route path="/Prog" element={<Prog />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
