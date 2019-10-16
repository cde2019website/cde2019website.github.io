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
        <Navbar className="sticky-navbar" fixed="top" bg ="light" variant="light" expand="lg">
        <Navbar.Brand href="/">     
        
        { <img
            alt=""
            src={logo}
            width="35em"
            height="35em"
            className="d-inline-block align-top"
        /> }
        </Navbar.Brand>
        <Navbar.Brand href="">CDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        
        <Nav className="mr-auto">
            
        <Nav.Link href ="/Schedule/">{this.props.language === "English" ? "Schedule" : "Horaire"}</Nav.Link>
        <Nav.Link href ="/History/">{this.props.language === "English" ? "History" : "Histoire"}</Nav.Link>
        <Nav.Link href ="/Sponsors/">{this.props.language === "English" ? "Sponsors" : "Nos Parrains"}</Nav.Link>
        <Nav.Link href ="/Contact/">{this.props.language === "English" ? "Our Team" : "L'Equipe"}</Nav.Link>
        
{/* 
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
            </NavDropdown> */}        
        </Nav>
        <Navbar.Text>
            {this.props.children}
        </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    );
    }
} 
export default NaturalNavbar;