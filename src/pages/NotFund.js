import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <h1>Error! Page not found.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sunt quas quibusdam reiciendis. Consectetur, itaque!</p>
            <Link className="error-link" to='/'>Back To Home</Link>
        </div>
    );
}

export default NotFound;