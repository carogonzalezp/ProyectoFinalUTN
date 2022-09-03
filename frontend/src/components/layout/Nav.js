import '../../styles/layout.css';

/*import { Link } from "react-router-dom";*/
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li>< NavLink to="/" className={({ isActive}) => isActive? "activo" : undefined }>Inicio</NavLink></li>
                    <li>< NavLink to="/quienes-somos" className={({ isActive}) => isActive? "activo" : undefined }>Quiénes somos</NavLink></li>
                    <li>< NavLink to="/novedades" className={({ isActive}) => isActive? "activo" : undefined }>Novedades</NavLink></li>
                    <li>< NavLink to="/contacto" className={({ isActive}) => isActive? "activo" : undefined }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
        
        /*<nav>
        <div className="holder">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>
    </nav>*/
    );
}
export default Nav;