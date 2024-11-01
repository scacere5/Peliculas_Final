import { NavLink } from "react-router-dom";
import milogo from "../../../assets/img/logoempresa.png"
export const Cabecera = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-primary border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={milogo} alt="El logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="*">
                  Seccionales
                </NavLink>
              </li>
 
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Equipos
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/registrar">Registrar Productos</NavLink></li>
            <li><NavLink className="dropdown-item" to="/listar">Listar Productos</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/admin">Administar Productos</NavLink></li>
          </ul>
        </li>
 
              <li className="nav-item">
                <NavLink className="nav-link" to="/acerca">
                  Quienes somos
                </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};