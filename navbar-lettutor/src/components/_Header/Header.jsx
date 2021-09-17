import React, { useState } from "react";
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
    const handleSignOut = () => {
        alert("log out nè");
    }

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const [show1, setShow1] = useState(false);
    const showDropdown1 = (e) => {
        setShow1(!show1);
    }
    const hideDropdown1 = e => {
        setShow1(false);
    }
    
    const handleSubmit = (e) => {
       e.preventDefault();
       alert("ok");
    }
    
    
    

    return (
        <>
            <Container fluid style={{ paddingLeft: "0px", borderBottom: "1px black", boxShadow: "0 2px 2px 0px rgb(136, 136, 136)" }}>
                <Navbar expand="lg" sticky="top" style={{ paddingLeft: "0px" }}

                    collapseOnSelect
                // bg="dark"
                // variant="dark"
                // className="navbar fixed-top" 
                // expand="md"
                >

                    {/* trong <Navbar.Brand, Nav.Link, NavDropdown.Item,...đều dùng được href
                    <Navbar.Brand className="logo" to="#" style={{ paddingLeft: "4%", width: "16%" }}>
                        <Link to="/" style={{ left: "0px" }}>
                            <Image
                                src="https://app.lettutor.com/static/media/lettutor_logo.91f91ade.svg"
                                alt={`lettutor logo`}
                                style={{ height: "40px", width: "170px", zIndex: "100"}}
                            />
                        </Link>
                    </Navbar.Brand> */}


                    {/* Tham khảo theo :
                     https://www.youtube.com/watch?v=VzWBLj_CfpE */}
                    <div class="container header" style={{ marginLeft: "5%", paddingLeft: "0px" }}>
                        <Link to="/" style={{ marginLeft: "0px", paddingLeft: "0px", marginRight: "30px" }}>
                            <Image
                                src="https://app.lettutor.com/static/media/lettutor_logo.91f91ade.svg"
                                alt={`lettutor logo`}
                                style={{ height: "44px", width: "170px", marginLeft: "0px", paddingLeft: "0px" }}
                            />
                            {/* <img
                                alt="logo"
                                src={LogoImg}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            /> */}
                        </Link>
                        {/* <img src={logo} alt="loading" style={{ height: "56px" }} /> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "yellow", borderRadius: "25%" }} />
                        <Navbar.Collapse id="basic-navbar-nav" style={{ paddingTop: "20px", paddingBottom: "1px", marginBottom: "0px", verticalAlign: "text-bottom", marginLeft: "20px", width: "̉80%", height: "100%" }}>
                            {/* <Nav className="me-auto">
                            </Nav> */}
                            <Nav className="menu-list-css" style={{ marginBottom: "0px", paddingBottom: "0xp", verticalAlign: "text-bottom" }}>
                                <NavLink className="links mb-0 pb-0" exact to="/" activeClassName="selected" >TUTOR</NavLink>
                                <NavLink className="links" exact to="/thu" activeClassName="selected" >SCHEULE</NavLink>
                                <NavLink className="links" exact to="/thu1" activeClassName="selected" >HISTORY</NavLink>
                                <NavLink className="links" exact to="/thu2" activeClassName="selected" >COURSES</NavLink>
                                <NavLink className="links" exact to="/thu3" activeClassName="selected" >BECOME A TUTOR</NavLink>
                                <NavLink to='/'><Button variant="primary">Đăng ký</Button></NavLink>
                                {/* <Nav.Link href="/aboutus">About us</Nav.Link>
                                <Nav.Link href="/contact">Contact us</Nav.Link> */}
                            </Nav>
                            <NavDropdown title="User" id="basic-nav-dropdown"
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                                alignLeft
                            >
                                <NavDropdown.Item>Adser</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sign in" id="basic-nav-dropdown-form"
                                show={show1}
                                onMouseEnter={showDropdown1}
                                onMouseLeave={hideDropdown1}
                                alignLeft
                            >
                                <NavDropdown.Item>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" Name="email"/>
                                            {/* <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text> */}
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" Name="password"/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </div>
                </Navbar>


                {/* <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"> <img src="https://www.kindpng.com/picc/m/133-1337806_job-vector-seeker-job-logo-magnifying-glass-png.png" alt="logo" className="navbarLogo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
                            <Nav.Link onClick={() => history.push("/favorites")}>Favorite</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        console.log(e.key);
                                        setSearch(searchValue)
                                    }
                                }}
                            />
                            <Button variant="outline-success" onClick={() => setSearch(searchValue)}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar> */}

                {/* ) : (
              <React.Fragment>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </React.Fragment>
            )} */}
            </Container>

        </>
    )
}
