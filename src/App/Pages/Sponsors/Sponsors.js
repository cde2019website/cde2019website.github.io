import React from 'react';
import './Sponsors.css';
import SponsorCell from '../../Components/SponsorCell/SponsorCell.js';
import Row from 'react-bootstrap/Row';
import SponsorLevel from '../../Components/SponsorLevel/SponsorLevel.js';
import PageHeader from '../../Components/PageHeader/PageHeader';


import Nutrien from '../../img/Nutrien.png';
import Carleton from '../../img/Carleton.png';
import EngineersCanada from '../../img/EngineersCanada.png';
import hydroOne from '../../img/hydroOne.png';
import Linamar from '../../img/Linamar.png';
import Makerbars from '../../img/Makerbars.png';
import McGill from '../../img/McGill.png';
import RBC from '../../img/RBC.PNG';
import Manitoba from '../../img/manitoba.png';
import Waterloo from '../../img/Waterloo.png';
import Chorley from  '../../img/chorley.png';
import ACEC from  '../../img/acec_logo.jpg';
import Atlas from '../../img/Atlas.png';
import Autotube from '../../img/Autotube.jpg';
import booch from '../../img/booch-icon.png';
import cec from '../../img/cec.png';
import ivey from '../../img/ivey.jpg';
import nserc from '../../img/nserc.png';
import tbk from '../../img/tbk.png';
import UBC from '../../img/ubc.png';
import Weng from '../../img/weng.png';


class Sponsors extends React.Component{

    render(){
        return(
                <div className = "SponsorsPage">
                <PageHeader
                header="Sponsors"
                detail="The Conference on Diversity in Engineering thanks its generous sponsors for making this event possible."
                >
                </PageHeader>

                <SponsorLevel level="Gold"/>
                <Row>
                    <SponsorCell number="1" company="Nutrien" img={Nutrien}>
                    </SponsorCell>
                </Row>
                <SponsorLevel level="Silver"/>
                <Row>
                    <SponsorCell number="4" company = "Hydro One" img={hydroOne}>
                    </SponsorCell>
                    <SponsorCell number="5" company = "Linamar" img ={Linamar}>
                    </SponsorCell>
                    <SponsorCell number="3" company = "Engineers Canada" img={EngineersCanada}>
                    </SponsorCell>
                    <SponsorCell number="2" company = "Atlas Copco Compressors Canada" img={Atlas}>
                    </SponsorCell>
                    <SponsorCell number="1" company = "Western Engineering Projects" img={Weng}>
                    </SponsorCell>
                </Row>
                <Row>
                </Row>
                <SponsorLevel level="Bronze"/>
                <Row>
                    <SponsorCell number="4" company = "Chorley and Bissett" img ={Chorley}>
                    </SponsorCell>
                    <SponsorCell number="2" company = "American Council of Engineering Companies(ACEC)" img ={ACEC}>
                    </SponsorCell>
                    <SponsorCell number="3" company = "Autotube" img ={Autotube}>
                    </SponsorCell>
                    <SponsorCell number="6" company = "University of British Columbia" img ={UBC}>
                    </SponsorCell>
                </Row>
                <SponsorLevel level="Donor"/>
                <Row>
                    <SponsorCell number="1" company = "MakerBars" img ={Makerbars}>
                    </SponsorCell>
                    <SponsorCell number="5" company = "University of Manitoba" img ={Manitoba}>
                    </SponsorCell>
                    <SponsorCell number="2" company="Carleton" img={Carleton}>
                    </SponsorCell>
                    <SponsorCell number="4" company="Waterloo" img={Waterloo}>
                    </SponsorCell>
                    <SponsorCell number="6" company = "RBC" img ={RBC}>
                    </SponsorCell>
                    <SponsorCell number="3" company = "McGill" img ={McGill}>
                    </SponsorCell>
                </Row>
                <Row>
                    <SponsorCell number="5" company = "Canada's Energy Citizens" img ={cec}>
                    </SponsorCell>
                    <SponsorCell number="1" company = "Booch Kombucha" img ={booch}>
                    </SponsorCell>
                    <SponsorCell number="3" company = "Ivey Business School" img ={ivey}>
                    </SponsorCell>
                    <SponsorCell number="4" company = "NSERC Chair for Women in Science and Engineering Ontario" img ={nserc}>
                    </SponsorCell>
                    <SponsorCell number="6" company = "tbk Creative" img ={tbk}>
                    </SponsorCell>
                </Row>
                </div>
            );
    }
}
export default Sponsors;