import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Header.css'; 

export function Header() {
  return (
    <header className="header">
      <div className="hero">
        <h1 className="Logo">Jaque’s</h1>
      </div>
      <nav>
        <ul className="ul">

          <div className="arrumar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Features">About</Link></li>
          <li><Link to="/Community">Contact</Link></li>
          </div>

          <div className="login">
          <li className="no-list-style-0">
            <Link to="/Register" className="more-link-0">Sign in</Link>
       
            <FontAwesomeIcon icon={faUser} />
          
          </li>
        </div>
        </ul>

      </nav>
    </header>
  );
}
