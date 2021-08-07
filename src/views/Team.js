import React from "react";
import "./Pricing.css";
import { Container, Row, Col } from "react-bootstrap";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

const Team = () => {
  return (
    <div className="pricing_section">
      <div className="pricingFaq section_padding">
        <Container>
          <h2 className="text-center text-primary mb-5">
            Team Formation Details
          </h2>
          <Row>
            <Col md={6}>
              <div className="py-2">
                <h6>Counseling Team</h6>
                <p>
                  Providing counseling face to face, over the telephone, or
                  online. Providing true Information about career options in
                  civil Engineering & ways to achieve them
                </p>
              </div>
              <div className="py-2">
                <h6>Alumni Relation Team</h6>
                <p>
                  To work towards ensuring the mutual benefit of the alumni as
                  well as the students, maintain a database of Alumni of
                  Department, To keep an Annual Department Alumni Meet (Virtual
                  every year), and to have a Mentorship Programme
                </p>
              </div>
              <div className="py-2">
                <h6>Designing Team </h6>
                <p>
                  Responsible for taking the idea and bringing it to life using
                  their professional skills like Graphics Development and Video
                  Making (Multimedia Expertise)
                </p>
              </div>
              <div className="py-2">
                <h6>Development Team </h6>
                <p>
                  To make and maintain the Website Development Process. To make
                  and maintain Application Development Process. To help
                  different teams to keep their databases safe and digitized
                </p>
              </div>
              <div className="py-2">
                <h6>Editorial Team </h6>
                <p>
                  To maintain a monthly journal of the event took place, To
                  create a road map of events to be organized in coming future,
                  To help sports and cultural team with any possible
                  requirements in certificates, To provide/support social media
                  team with posts and captions, To update everyone on any
                  foreseen notice on JUT or college website.
                </p>
              </div>
              <div className="py-2">
                <h6>Sports and Cultural Team: </h6>
                <p>
                  To arrange competitions on regular basis for maintaining a
                  link between both sides, To be responsible for certificates
                  and medals to be given to winners. To be active throughout the
                  year and aware of any festival or important dates. To manage
                  allowances and funds for conducting events. To organize events
                  or games among the team of ACE on special occasions to create
                  a fun and loving environment
                </p>
              </div>
              <div className="py-2">
                <h6>Gate - ESE Forum: </h6>
                <p>
                  To update the public with exam dates. To provide a road map
                  for appearing in any such exams. To be actively involved on
                  syllabus, notes, links to YouTube channels and websites. To
                  conduct webinars by dignitaries on the scope of civil
                  engineering and the importance of such exams. To create a list
                  of interested candidates to make a room for their conversation
                  and doubt clearance. To consult professors to provide special
                  lectures as per requirement
                </p>
              </div>
              <div className="py-2">
                <h6>Secretarial Team - Admin work: </h6>
                <p>
                  To collect data of interested candidates for GATE or such
                  exams. To inform other bodies about any upcoming projects and
                  opportunities. To manage reports and make creative and
                  attractive templates for events. To consult with other teams
                  regarding any issues generated and to maintain data of
                  participants in any webinar conducted
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="py-2">
                <h6>Marketing Team</h6>
                <p>
                  Serves to coordinate and promote all the works representing
                  the organization. to do Event Listing for various events,
                  management for marketing initiatives, providing SEO for the
                  website, Serving as media liaison, and Conducting student and
                  event market research
                </p>
              </div>
              <div className="py-2">
                <h6>Ideation Team</h6>
                <p>
                  Aim to generate a large number of ideas that the team can then
                  filter and cut down into the best. Bring together perspectives
                  and strengths of your team members, Uncover unexpected areas
                  of innovation in Event Designs, and organize Brainstorm
                  Meetings with ACE people.
                </p>
              </div>
              <div className="py-2">
                <h6>Industrial Relation Team </h6>
                <p>
                  Managing relationships with various companies and Industry
                  People, Introducing the need for skills required to sustain in
                  Industry and helping to organize Civil Engineering Hackathons
                  by collecting Problem Statements from Companies.
                </p>
              </div>
              <div className="py-2">
                <h6>Research & Project Application</h6>
                <p>
                  To promote research that highlights successful modern
                  applications of Civil engineering by publishing high-quality
                  academic international Books, or Journals, or Magazines or
                  Tracts/Pamphlets on any subjects/topics, which are related to
                  the overall growth/improvement/uplift of all sections of the
                  society.
                </p>
              </div>
              <div className="py-2">
                <h6>Social media team:</h6>
                <p>
                  To categorize any information to be circulated into green and
                  red class, Green class represents the information's priority
                  to be considered for the student body, Red class represents
                  the information's priority to be comparatively higher and
                  considered for the board as well as a student body. To
                  circulate the information to the majority of the public with
                  the help of social media.
                </p>
              </div>
              <div className="py-2">
                <h6>Public Relation Team:</h6>
                <p>
                  To influence individuals to join groups as per requirement, To
                  carry events for general and public awareness including
                  rallies, To maintain constant communication with students,
                  alumni, batch mates, and board members as a representative
                  body of ACE, and To create active participation in any event
                  organized by Sports and Cultural Team.
                </p>
              </div>
              <div className="py-2">
                <h6>Sponsorship Team:</h6>
                <p>
                  The sponsorship team is subdivided into functioning groups as
                  mentioned below: a) Creating list of Sponsors with different
                  means available b) Having conversations with the sponsors c)
                  Attracting the attention of sponsors with creative ideas and
                  models Note: Any member of one of the categories is not
                  restricted to join the other category.
                </p>
              </div>
              <div className="py-2">
                <h6>Operational Team:</h6>
                <p>
                  To conduct all events smoothly. To solve disputes arisen among
                  the teams or team members. To organize rallies or events
                  carried out by other teams. To maintain communication among
                  the teams. To operate the webinars for smooth conducting
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section_padding join-button-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="text-center">
                <h2 className="mb-5">
                  Join the <span className="text-primary">amazing </span> team.
                </h2>
                <Link to="!#" className="btn btn-primary btn-animation">
                  Click here to get Started
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Team;
