import React from 'react';
import './MainPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HomeCell from '../../Components/HomeCell/HomeCell';
import VideoCell from '../../Components/VideoCell/VideoCell';
import Countdown from 'react-countdown-now';
import SocialMedia from '../../Components/SocialMedia/SocialMedia.js';
import {Link} from "react-router-dom";
import FAQ from '../../Components/FAQ/FAQ.js'


const Completionist = () => <span> Begins Now</span>

//How do I add a language parameter to the below function? What is it even?
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist/>;
  } else {
    // Render a countdown
    return <span> {days} <span className = "smaller">days,</span> {hours} <span className = "smaller">hours,</span> {minutes} <span className="smaller">minutes and</span> {seconds} <span className="smaller">seconds</span></span>;
  }
};


class MainPage extends React.Component{

    render(){
        return(
        <Container className="RowContainer">
        <Row className="titleRow">
          <HomeCell number="1">
          <h1 className="CountdownBanner">
          {this.props.language === "English" ? "2019 Conference on Diversity in Engineering" : "Conférence Sur La Diversité En Ingénierie"}
          <br/></h1>
          <hr/>
          <h2><Countdown date={Date.UTC(2019,10,1)} renderer = {renderer} daysInHours={false}>
          <Completionist/>
          </Countdown>
          </h2>
          <div className="SocMedDummy">
          <SocialMedia/>
          </div>
          </HomeCell>
        </Row>

        <Row>
          <HomeCell number="2">
          <h1>
            <Link to="/Schedule/">
              {this.props.language === "English" ? "Schedule" : "Horaire"}
            </Link>
          </h1>
          <hr/>
          <h2>
          {this.props.language === "English" ? "Event Schedule" : "Calendrier des Événements en Direct"}
          </h2>
          </HomeCell>
          <HomeCell number="3">
          <h1>
            <Link to="/History/">
              {this.props.language === "English" ? "History" : "Histoire"}
            </Link>
          </h1>
          <hr/>
          <h2>
          {this.props.language === "English" ? "The Past of the CDE" : "L'Histoire du CDE"}
          </h2>
          </HomeCell>
        </Row>

        <Row> 
          <HomeCell number="4">
          <h1>
            <Link to="/Sponsors/">
              {this.props.language === "English" ? "Sponsors" : "Nos Parrains"}
            </Link>
          </h1>
          <hr/>
          <h2>
          {this.props.language === "English" ? "Who Makes This Possible?" : "Qui rend cela possible?"}
          </h2>
          </HomeCell>
          <HomeCell number="6">
          <h1>
            <Link to="/Contact/">
              {this.props.language === "English" ? "Our Team " : "Notre équipe"}
            </Link>
          </h1>
          <hr/>
          <h2>
          {this.props.language === "English" ? "Meet the Team" : "Rencontrer l'équipe"}
          </h2>
          </HomeCell>
        </Row>
        <div className="FAQs">
        <div className="FAQCover">
        </div>
        </div>
        </Container>

        );
    }
}

export default MainPage;