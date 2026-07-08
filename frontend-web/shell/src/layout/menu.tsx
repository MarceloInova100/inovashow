import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/pessoa">Pessoa</Link>
        </li>

        <li>
          <Link to="/vendedor">Vendedor</Link>
        </li>

        <li>
          <Link to="/visita">Visita</Link>
        </li>

        <li>
          <Link to="/expositor">Expositor</Link>
        </li>

        <li>
          <Link to="/config">Configurações</Link>
        </li>
      </ul>
    </nav>
  );
}