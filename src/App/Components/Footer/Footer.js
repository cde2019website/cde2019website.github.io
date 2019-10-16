import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import Logo from '../../img/logo.png'
import SocialMedia from '../SocialMedia/SocialMedia.js'


class Footer extends React.Component{
    render(){
        return(
            <Row className="blackFooter">
                <Col className="FooterColumns">
                <div className="FooterMedia">
                <img alt="" className="FooterLogo" src={Logo}/>
                <SocialMedia className="SocMed"/>
                </div>
                <h6>Conference on Diversity in Engineering, 2019.</h6>
                <h6><a href="mailto:cochairs@cde.cfes.ca">cochairs@cde.cfes.ca</a></h6>
                </Col>
            </Row>
        );
    }
}

export default Footer;