import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/watchList'>Watch List</NavLink>
            <NavLink to='/completedWatchList'>Completed Watch List</NavLink>
            <NavLink to='/profile'>profile</NavLink>
            <NavLink to='/login'>login</NavLink>
        </nav>
    );
};

export default NavBar;
