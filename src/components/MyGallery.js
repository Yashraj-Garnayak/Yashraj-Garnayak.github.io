import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCards } from "./ProjectCard";
import projImg1 from "../assets/img/1.webp";
import projImg2 from "../assets/img/2.webp";
import projImg3 from "../assets/img/3.webp";
import projImg4 from "../assets/img/4.webp";
import projImg5 from "../assets/img/5.webp";
import projImg6 from "../assets/img/6.webp";
import projImg7 from "../assets/img/7.webp";
import projImg8 from "../assets/img/8.webp";
import projImg9 from "../assets/img/9.webp";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const MyGallery = () => {

  


  
  const project = [
    {
      title: "",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg1,
    },
    
    {
      title: "",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg4,
    },
   
   
    {
      title: "",
      description: "",
      imgUrl: projImg6,
    },

    {
      title: "",
      description: "",
      imgUrl: projImg7,
    },

    {
      title: "",
      description: "",
      imgUrl: projImg8,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg9,
    }
  
  ];


  return (
    <section className="project" id="mygallery" style={{background: `linear-gradient(270deg, #0a0a0a 0%, #565967 100%)`}}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Gallery</h2>
                {/* <p>To help you get started on your business journey, here are some free resources to guide you.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Photos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Profiles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Professionals</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          project.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project.map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
