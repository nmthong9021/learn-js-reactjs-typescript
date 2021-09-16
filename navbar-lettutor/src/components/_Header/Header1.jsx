import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    Form,
    FormGroup,
    FormControl,
    Button,
    Image,
    NavDropdown,
    Container
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './header.css'

export default function Header(props) {
    const logout = () => {

    }



    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" to="/">WebSiteName</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><NavLink to="/">Home</NavLink></li>
                            <li className="dropdown">
                                <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/">Page 1 <span className="caret" /></NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/thu">Page 1-1</NavLink></li>
                                    <li><NavLink to="/thu">Page 1-2</NavLink></li>
                                    <li><NavLink to="/thu">Page 1-3</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/thu">Page 2</NavLink></li>
                            <li><NavLink to="/thu">Page 3</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/"><span className="glyphicon glyphicon-user" /> Sign Up</NavLink></li>
                            <li><NavLink to="/"><span className="glyphicon glyphicon-log-in" /> Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
