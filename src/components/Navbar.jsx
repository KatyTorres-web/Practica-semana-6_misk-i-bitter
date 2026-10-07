import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Misk'i & Bitter</h2>

      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/pedidos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Pedidos
        </NavLink>

        <NavLink
          to="/nosotros"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Nosotros
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
