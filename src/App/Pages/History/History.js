import React from 'react';
import './History.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../../Components/PageHeader/PageHeader';

class History extends React.Component{

    render(){
        
        var englishText = "The Conference on Diversity in Engineering (CDE) as a valuable service to its members. Previously known as the National Conference on Women in Engineering (NCWIE), CDE aims to develop knowledge surrounding the variety of individuals, cultures and perspectives found within engineering communities. CDE further aims to instill a notion of positivity and togetherness in creating spaces that value the differences between groups of engineering students and professionals. CDE is entering it's 5th successful year and is only growing in reach and impact. Delegates will not only leave the conference with a solid understanding of the issues minorities encounter in the engineering profession, but they will also be equipped to appropriately address these issues to create a more inclusive and thriving community. Students attending CDE will have the opportunity to meet and hear from successful, interesting, and talented speakers prepared to share their experience and knowledge on how to embrace diversity in order to betteraddress the complex, interdisciplinary problems of society. The mission of the CFES is to support growth and communication, and to ensure moral, intellectual, cultural, academic, social, and economic well-being for its members. CDE supports our mission by creating networking opportunities and providing a better understanding of the issues pertaining to diversity in engineering, all while inspiring leadership and active participation in all facets of engineering education.";
        var frenchText = "La Conférence sur la diversité en ingénierie (CDI), un service précieux pour ses membres. Auparavant connue sous le nom de Conférence nationale sur les femmes en ingénierie (CNFI), la CDI vise à développer les connaissances sur la diversité des personnes, des cultures et des perspectives au sein des communautés d’ingénierie. La CDI vise également à inculquer une notion de positivité et de convivialité en créant des espaces qui valorisent les différences entre les groupes d'étudiants en génie et les professionnels. La CDI entre dans sa 5e année de succès et ne fait que croître en portée et en impact. Les délégués quitteront la conférence non seulement avec une solide compréhension des problèmes que les minorités rencontrent en exerçant la profession d'ingénieur, mais ils seront également équipés pour aborder ces questions de façon appropriée afin de créer une communauté plus inclusive et prospère. Les étudiants de la CDI auront l'occasion de rencontrer et d'entendre des conférenciers performants, intéressants et talentueux, prêts à partager leurs expériences et leurs connaissances sur la façon d'adopter la diversité afin de mieux aborder les problèmes complexes et interdisciplinaires de la société. La mission de la FCEG est de soutenir la croissance et la communication et d'assurer le bien-être moral, intellectuel, culturel, universitaire, social et économique de ses membres. La CDI appuie notre mission en créant des occasions de réseautage et en offrant une meilleure compréhension des enjeux liés à la diversité en ingénierie, tout en inspirant le leadership et la participation active dans tous les aspects de la formation en ingénierie.";
        
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