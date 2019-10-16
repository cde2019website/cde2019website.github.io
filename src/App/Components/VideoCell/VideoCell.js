import React from 'react';
import './VideoCell.css'
import Col from 'react-bootstrap/Col'


import cde from '../../img/cde.MOV';

class VideoCell extends React.Component{


    render(){
        return(
        <Col>
        <video id="background-video" loop autoPlay>
            <source src={cde} type="video/mp4"/>
        <div className ={"Cell"+this.props.number+" Cell"}>
        <div className={"CellCover Cell"+this.props.number+"Cover"}>
        <div className="CellContainer">
        {this.props.children}
        </div> 
        </div>
        </div>
        </video>
        </Col>
        );
    }
}

export default VideoCell;