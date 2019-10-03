import React from 'react';
import './Contact.css';
import Row from 'react-bootstrap/Row';
import TeamMember from '../../Components/TeamMember/TeamMember.js';
import PageHeader from '../../Components/PageHeader/PageHeader.js';
import Col from 'react-bootstrap/Col';

import Brock from '../../img/Brock.jpg';
import Raya from '../../img/Raya.JPG';
import Matt from '../../img/Matt.jpeg';
import Mathumitha from '../../img/mathumitha.JPG.jpeg';
import Jayna from '../../img/Jayna.jpg';
import Yudi from '../../img/Yudi.jpg';
import Andre from '../../img/Andre.png'
import Usman from '../../img/Usman.jpg'


class Contact extends React.Component{

    render(){
        return(
            <div className="ContactPage">
            <div className="ContactCover"> 
                <PageHeader
                header="Contact Us"
                detail="Feel free to contact any of the below officials for further information about the conference. For general inquiries, email Matt and Raya!"
                ></PageHeader>

                <Row className="contactRow">
                    <Col className="spacerCol"></Col>
                    <TeamMember img={Matt} name="Matt Tutty" position = "Co-Chair" email = "cochairs@cde.cfes.ca"></TeamMember>
                    <Col className="spacerCol"></Col>
                    <TeamMember img={Raya} name="Raya Kassam" position = "Co-Chair" email = "cochairs@cde.cfes.ca"></TeamMember>
                    <Col className="spacerCol"></Col>
                </Row>
                <Row className="contactRow">
                    <TeamMember img={Yudi} name="Yudi Yang" position = "Sponsorship" email = "sponsorship@cde.cfes.ca"></TeamMember>
                    <TeamMember img={Jayna} name="Jayna Joachim" position = "Program Coordinator" email = "jayna.joachim@cde.cfes.ca"></TeamMember>
                    <TeamMember img={Andre} name="Andre Cochegrus" position = "Sponsorship" email = "sponsorship@cde.cfes.ca"></TeamMember>
                </Row>
                <Row className="contactRow">
                    <TeamMember img={Mathumitha} name="Mathumitha Sureshkumar" position = "Finance" email = ""></TeamMember>
                    <TeamMember img={Brock} name="Brock Lumbard" position = "Tech" email = "jlumbard@uwo.ca"></TeamMember>
                    <TeamMember img={Usman} name="Usman Salim " position = "Logistics" email = ""></TeamMember>
                    </Row>
            </div>
            </div>
        );
    }
}

export default Contact;