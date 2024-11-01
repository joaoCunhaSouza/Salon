import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'; // Importando o ícone da estrela
import '../Header.css'; 


export function Header() {
  return (
    <header className="header">
      <div className="hero">
        <div className="linha">
        <h1 className="Logo">Jaque’s</h1>
        <strong className="ston">5.0</strong>
        <FontAwesomeIcon icon={faStar} /> {/* Usando o ícone da estrela corretamente */}
      </div>
      </div>
      <nav>
        <ul className="ul">
          <div className="arrumar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </div>

          <div className="login">
            <li className="no-list-style-0">
              <FontAwesomeIcon icon={faUser} />
              <Link to="/Register" className="more-link-0">Sign in</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
