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
            <Container fluid style={{paddingLeft: "0px", borderBottom: "1px black", boxShadow: "0 2px 2px 0px rgb(136, 136, 136)" }}>
                <Navbar expand="lg" sticky="top" style={{paddingLeft: "0px"}}>
                    {/* <Navbar.Brand className="logo" to="#" style={{ paddingLeft: "4%", width: "16%" }}>
                        <Link to="/" style={{ left: "0px" }}>
                            <Image
                                src="https://app.lettutor.com/static/media/lettutor_logo.91f91ade.svg"
                                alt={`lettutor logo`}
                                style={{ height: "40px", width: "170px", zIndex: "100"}}
                            />
                        </Link>
                    </Navbar.Brand> */}
                    <div class="container header" style={{marginLeft: "5%",paddingLeft: "0px"}}>
                        <Link to="/" style={{marginLeft: "0px",paddingLeft: "0px", marginRight: "30px"}}>
                            <Image
                                src="https://app.lettutor.com/static/media/lettutor_logo.91f91ade.svg"
                                alt={`lettutor logo`}
                                style={{ height: "44px", width: "170px",marginLeft: "0px", paddingLeft: "0px"}}
                            />
                        </Link>
                        {/* <img src={logo} alt="loading" style={{ height: "56px" }} /> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"yellow", borderRadius:"25%"}}/>
                        <Navbar.Collapse id="basic-navbar-nav" style={{paddingTop: "20px", paddingBottom:"1px", marginBottom: "0px", verticalAlign: "text-bottom", marginLeft: "20px", width: "̉80%", height: "100%" }}>
                            {/* <Nav className="me-auto">
                            </Nav> */}
                            <Nav className="menu-list-css" style={{marginBottom: "0px", paddingBottom: "0xp", verticalAlign: "text-bottom" }}>
                                <NavLink className="links mb-0 pb-0" exact to="/" activeClassName="selected" >TUTOR</NavLink>
                                <NavLink className="links" exact to="/thu" activeClassName="selected" >SCHEULE</NavLink>
                                <NavLink className="links" exact to="/thu1" activeClassName="selected" >HISTORY</NavLink>
                                <NavLink className="links" exact to="/thu2" activeClassName="selected" >COURSES</NavLink>
                                <NavLink className="links" exact to="/thu3" activeClassName="selected" >BECOME A TUTOR</NavLink>
                                <NavLink to='/'><Button variant="primary">Đăng ký</Button></NavLink>
                            </Nav>
                            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/adduser">Adser</NavDropdown.Item>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                <Nd href="reprt">Report</Nd uavDropdown.Item>
                            </NavDropdown> */}
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </Container>

        </>
    )
}
