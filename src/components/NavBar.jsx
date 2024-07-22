import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/directors'>Director</NavLink>
            <NavLink to='/actors'>Actors</NavLink>
        </nav>
    );
};

export default NavBar;
