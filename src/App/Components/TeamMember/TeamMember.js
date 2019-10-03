import React from 'react';
import './TeamMember.css'
import Col from 'react-bootstrap/Col';



class TeamMember extends React.Component{

    //Should have a prop for the following: Name, Position, Picture, Email Address


    render(){

        var divStyle = {
            backgroundImage: 'url('+this.props.img+')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };

        return(
            <Col>
                <div style={divStyle} className="memberPhoto">
                </div>
                <a href={"mailto:"+this.props.email}>{this.props.name}</a>
                <h2>{this.props.position}</h2>
            </Col>
        );
    }
}

export default TeamMember;