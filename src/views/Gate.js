import React from "react";
import { Container, Row, Col, Button, Image ,Table} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import BannerImg from "../assets/images/constitution.svg";
import MainImg from "../assets/images/magazine.jpg";
import GateImg from "../assets/images/GateAIR.jpeg";


// import "./GmbGeoGrid.css";

const Gate = () => {
  return (
    <div className="review-management">
      <div className="review-banner section_padding">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={5} sm={12}>
              <h1 className="banner-head text-primary font-weight-bold">
                GATE 2022
              </h1>
              <h2 className="banner-text">Result</h2>

            </Col>
            <Col md={6} sm={12}>
              <Image src={GateImg} style={{borderRadius:"20px"}} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padiing">
        <Container>
          <Row>
            <Col md={12}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rank </th>
                    <th>Batch</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aman Raj  </td>
                    <td>1060</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Manish Kumar Verma </td>
                    <td>1313</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Karam Chand Mahto  </td>
                    <td>1564</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Shashi Bhushan Mahto </td>
                    <td>1721</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Satya Prakash </td>
                    <td>2092</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Ujjwal Deep </td>
                    <td>3290</td>
                    <td>2k19</td>
                  </tr><tr>
                    <td>Rajesh Kumar Mahato </td>
                    <td>2410</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Harshit kumar Singh</td>
                    <td>4668</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Subhash Hansda </td>
                    <td>4523</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Milann Kashyap </td>
                    <td>6991</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Aashika </td>
                    <td>8177</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Sumit Kumar</td>
                    <td>9357</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Akash Roy </td>
                    <td>4889</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Raksha Singh </td>
                    <td>3785</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Aman Sahay </td>
                    <td>6385</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Anurag Kumar </td>
                    <td>9650</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Atul Baibhav </td>
                    <td>6455</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Pratik Harsh </td>
                    <td>6159</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Ankit kumar Sinha </td>
                    <td>10499</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Anuj kumar </td>
                    <td>12459</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Ravikant Singh </td>
                    <td>3785</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Sameer Oraon</td>
                    <td>21225</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Vivek Chandra Singh </td>
                    <td>7617</td>
                    <td>2k18</td>
                  </tr><tr>
                    <td>Vicky Kumar Mandal </td>
                    <td>7136</td>
                    <td>2k19</td>
                  </tr><tr>
                    <td>Kumar Sanu </td>
                    <td>9555</td>
                    <td>2k19</td>
                  </tr><tr>
                    <td>Abhisek Krishna </td>
                    <td>7205</td>
                    <td>2k19</td>
                  </tr><tr>
                    <td>Satvir Kumar </td>
                    <td>16569</td>
                    <td>2k19</td>
                  </tr><tr>
                    <td>Mantu Pryaash </td>
                    <td>7136</td>
                    <td>2k19</td>
                  </tr><tr>
                    <td>Vivek Kumar </td>
                    <td>11673</td>
                    <td>2k19</td>
                  </tr><tr>
                    <td>Alok Kumar Mahato </td>
                    <td>6991</td>
                    <td>2k19</td>
                  </tr>
                  
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        </div>
    </div>
  );
};

export default Gate;
