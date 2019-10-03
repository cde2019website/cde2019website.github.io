import React from 'react';
import './History.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../../Components/PageHeader/PageHeader';

class History extends React.Component{

    render(){
        
        var englishText = "The Conference on Diversity in Engineering (CDE) as a valuable service to its members. Previously known as the National Conference on Women in Engineering (NCWIE), CDE aims to develop knowledge surrounding the variety of individuals, cultures and perspectives found within engineering communities. CDE further aims to instill a notion of positivity and togetherness in creating spaces that value the differences between groups of engineering students and professionals. CDE is entering it's 5th successful year and is only growing in reach and impact. Delegates will not only leave the conference with a solid understanding of the issues minorities encounter in the engineering profession, but they will also be equipped to appropriately address these issues to create a more inclusive and thriving community. Students attending CDE will have the opportunity to meet and hear from successful, interesting, and talented speakers prepared to share their experience and knowledge on how to embrace diversity in order to betteraddress the complex, interdisciplinary problems of society. The mission of the CFES is to support growth and communication, and to ensure moral, intellectual, cultural, academic, social, and economic well-being for its members. CDE supports our mission by creating networking opportunities and providing a better understanding of the issues pertaining to diversity in engineering, all while inspiring leadership and active participation in all facets of engineering education.";
        var frenchText = "La Conférence sur la diversité en ingénierie (CDE) constitue un service précieux pour ses membres. Précédemment connue sous le nom de Conférence nationale sur les femmes en génie (NCWIE), la CDE a pour objectif de développer des connaissances sur la diversité des individus, des cultures et des perspectives existant au sein des communautés d'ingénieurs. CDE vise en outre à inculquer une notion de positivité et de cohésion en créant des espaces qui valorisent les différences entre des groupes d’étudiants en génie et de professionnels. Le CDE entame sa cinquième année de réussite et ne fait que grandir en portée et en impact. Les délégués quitteront la conférence avec une solide compréhension des problèmes rencontrés par les minorités dans la profession d'ingénieur, mais ils seront également équipés pour traiter de manière appropriée ces problèmes afin de créer une communauté plus inclusive et plus prospère. Les étudiants participant au CDE auront l'occasion de rencontrer et d'entendre des conférenciers performants, intéressants et talentueux, prêts à partager leur expérience et leurs connaissances sur la manière d'intégrer la diversité afin de mieux traiter les problèmes complexes et interdisciplinaires de la société. La CFES a pour mission de soutenir la croissance et la communication et d'assurer le bien-être moral, intellectuel, culturel, scolaire, social et économique de ses membres. Le CDE soutient notre mission en créant des possibilités de réseautage et en fournissant une meilleure compréhension des problèmes liés à la diversité en ingénierie, tout en inspirant le leadership et la participation active à toutes les facettes de la formation en ingénierie.";
        
        return(
            <div>
            <PageHeader
            header="History"
            detail="The Conference on Diversity in Engineering is a CFES intiative with a strong purpose in its young history."
            >

            </PageHeader>
            <div className="historyContainer">
                <Row className = "HistoryRow">
                    <Col className="HistoryCol">
                        <h1>
                        {this.props.language === "English" ? englishText : frenchText}
                        </h1>
                    </Col>
                </Row>
                
            </div>
            </div>
        );
    }
}

export default History;