import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <form className="container-fluid justify-content-start">
                <Link to="/">
                    <button className="btn btn-primary m-3" type="button">Home</button>
                </Link>
                <Link to="/counter">
                    <button className="btn btn-sm btn-secondary m-3" type="button">Counter</button>
                </Link>
            </form>
        </nav>
    );
}


export default Navbar;