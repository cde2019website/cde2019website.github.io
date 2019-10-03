import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from 'App/img/logo.png' //would love to learn why these relative links suck so much
import './NaturalNavbar.css'
import {Link} from "react-router-dom";

class NaturalNavbar extends React.Component{
    

    render (){

        return(
        <Navbar  variant="dark">
        <Navbar.Brand href="/">
        { <img
            alt=""
            src={logo}
            width="35em"
            height="35em"
            className="d-inline-block align-top"
        /> }
        </Navbar.Brand>
        <Nav className="mr-auto">
       <NavDropdown title={"CDE 2019"} id="basic-nav-dropdown">
            <NavDropdown.Item href="http://welcome.uwo.ca/360/seb.html">Spencer Engineering Building</NavDropdown.Item>
            <NavDropdown.Item href="https://www.eng.uwo.ca/departments-units/amit-chakma-engineering-building/">Amit Chakma Engineering Building</NavDropdown.Item>
            <NavDropdown.Item href="https://www.the-wave.ca/">The Wave</NavDropdown.Item>
            <NavDropdown.Item href="https://doubletree3.hilton.com/en/hotels/ontario/doubletree-by-hilton-hotel-london-ontario-YXUKSDT/index.html">Doubletree by Hilton</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item><Link to="/History/">{this.props.language === "English" ? "History" : "Histoire"}</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/Contact/">{this.props.language === "English" ? "Our Team" : "L'Equipe"}</Link></NavDropdown.Item>
            <NavDropdown.Divider/>
            {this.props.children}
        </NavDropdown>
        </Nav>
        </Navbar>
    );
    }
} 
export default NaturalNavbar;