import React from 'react';
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import login from '../../images/login.png';
import cart from '../../images/cart.png';

const NavBarLogin: React.FC = () => {
    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img className='logo' src={logo} alt="Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <NavDropdown  id="basic-nav-dropdown" title="الملف الشخصي">
                            <NavDropdown.Item as={Link} to="/admin/allproducts">لوحة التحكم</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user/profile">الصفحه الشخصية</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/">تسجيل خروج</NavDropdown.Item>
                        </NavDropdown>
                        <Link to='/login' className="nav-text d-flex mt-3 justify-content-center text-decoration-none" style={{ color: "white" }}>
                            <img src={login} className="login-img" alt="Login" />
                            <p style={{ color: "white" }}>دخول</p>
                        </Link>
                        <Link to='/cart' className="nav-text position-relative d-flex mt-3 justify-content-center text-decoration-none" style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="Cart" />
                            <p style={{ color: "white" }}>العربه</p>
                            <span className="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger"></span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarLogin;