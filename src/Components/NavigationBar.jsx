// React Router Dom Imports
import { Form, Link, NavLink } from "react-router-dom";

import { useState, useContext } from "react";

// Bootstrap imports 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

// images
import Cart from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"
import Toggle from "../images/icon-menu.svg"

// Sass
import '../Sass/NavigationBar.scss';

// Components 
import CartPage from "./CartPage";

// CartContext
import { CartContext } from "../Layout/Layout";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [navWidth, setNavWidth] = useState(0);

    function openNav() {
      setIsOpen(true);
      setNavWidth(250);
    }
  
    function closeNav() {
      setIsOpen(false);
      setNavWidth(0);
    }

    // CartContext
    const {cartItems, removeItemFromCart} = useContext(CartContext)

    return ( 
      <>
        <Navbar collapseOnSelect expand="lg" className="align-items-center"> 
          <Container className="align-items-center pt-4 pb-1 navContainer">
            <div className="d-flex align-items-center">
              <button className="me-2 me-sm-4 d-lg-none d-inline burger-nav" onClick={openNav}><img src={Toggle} alt="burgerNavIcon"/></button>
              <Navbar.Brand className="align-items-center m-0"><Link to="/" className="m-0 nav-link"><h2 className="align-items-center m-0">clothing</h2></Link></Navbar.Brand>
            </div>
            <Navbar.Collapse id="mySidenav" className="align-items-center mt-0 mt-lg-2"> 
              <Nav style={{ width: navWidth}} className={`me-auto mx-auto ms-sm-4 ms-0 align-items-center sidenav ${isOpen ? 'open' : ''}`}>
                <button className="closebtn" onClick={closeNav} style={{fontSize: "40px"}}>&times;</button>
                <NavLink to="/" className="mx-lg-3 m-sm-0 nav-link home" onClick={closeNav}>Home</NavLink>
                <NavLink to="/collections" className="mx-lg-3 m-sm-0 nav-link collections" onClick={closeNav}>Collections</NavLink>
                <NavLink to="/men" className="mx-lg-3 m-sm-0 nav-link" onClick={closeNav}>Men</NavLink>
                <NavLink to="/women" className="mx-lg-3 m-sm-0 nav-link" onClick={closeNav}>Women</NavLink>
                <NavLink to="/about" className="mx-lg-3 m-sm-0 nav-link" onClick={closeNav}>About</NavLink>
                <NavLink to="/contact" className="mx-lg-3 m-sm-0 nav-link" onClick={closeNav}>Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
            <div className="dropdownContainer align-items-center d-flex">
              <div className="me-3 me-sm-5">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle cart" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span style={{color: "hsl(220, 13%, 13%)"}}>{cartItems.length}</span>
                    <img src={Cart} alt="cartIcon" width={26} height={21}/>
                  </Link>
                  <ul className="dropdown-menu one" id="dropdown-menu">
                    <h3 className="px-3 pt-2">Cart</h3>
                    <hr />
                    <CartPage cartItems={cartItems} removeItemFromCart={(index, name) => removeItemFromCart(index, name)} />
                  </ul>
                </li>
              </div>
              <div>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle avatar" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={Avatar} alt="avatarIcon" width={35} height={35}/>
                  </Link>
                  <Form className="dropdown-menu two" id="dropdown-menu" method="post" action="/logout">
                    <li className="Create-Account"><Link className="" to=""></Link>Create Account</li>
                    <li><hr class="dropdown-divider"/></li>
                    <li className="logout"><button type="submit">Logout</button></li>
                  </Form>
                </li>
              </div>
            </div>
          </Container>
        </Navbar>
        <hr />
      </>
    );
}
 
export default NavigationBar;
