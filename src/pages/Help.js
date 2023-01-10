import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
    return (
        <div className="container">
            <h1 className="help-title">Website Help</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit.
            </p>
            <div className="help-links">
                <NavLink to='faq'>View The FAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </div>

            <Outlet />
        </div>
    );
}

export default Help;