import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar flex">
                <Link className="title" to='/'>RouteTheWorld</Link>
                <div className="links flex">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;