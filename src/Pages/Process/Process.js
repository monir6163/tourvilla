import React from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import "./Process.css";
import ProcessImg from "../../Assets/Images/cardCities/istanbul.jpg";
import Guide1 from "../../Assets/Images/guide1.png";
import Guide2 from "../../Assets/Images/guide2.jpg";
import Guide3 from "../../Assets/Images/guide3.png";
import Guide4 from "../../Assets/Images/guide4.png";
import NewsLetter from "../Home/NewsLetter/NewsLetter";

const Process = () => {
  return (
    <>
      <section id="process-banner" className="py-5">
        <h6 className="display-5 text-center text-abril-white">
          Explore How To Travel With Us
        </h6>
      </section>

      <section className="step py-lg-5 my-lg-5">
        <Container>
          <Row>
            <div className="col-12 col-md-10 mx-auto">
              <div className="d-none d-lg-flex align-items-center">
                <i className="far fa-check-circle fa-3x text-light-green me-3"></i>
                <h3 className="text-cyan me-3">Order</h3>
                <hr className="w-25" />
                <i className="fas fa-user-check fa-3x text-light-green mx-3"></i>
                <h3 className="text-cyan me-3">Verification</h3>
                <hr className="w-25" />
                <i className="fas fa-money-check-alt fa-3x text-light-green mx-3"></i>
                <h3 className="text-cyan me-3">Payment</h3>
                <hr className="w-25" />
                <i className="far fa-smile-wink fa-3x text-light-green mx-3"></i>
                <h3 className="text-cyan ">Enjoy</h3>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id="process" className="py-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8">
              <img src={ProcessImg} alt="about in home" className="img-fluid" />
            </div>
            <div
              className="col-12 col-md-4 d-flex flex-wrap align-items-center"
              style={{ minHeight: "100%" }}
            >
              <div>
                <h6 className="text-light-green mb-3">Book Now</h6>
                <h2 className="abril-font mb-3">
                  Choose From Our Awesome Packages
                </h2>
                <p className="text-secondary mb-3">
                  Donec dapibus mauris id odio ornare tempus. Duis sit amet
                  accumsan justo, quis tempor ligula. Quisque quis pharetra
                  felis. Ut quis consequat orci, at consequat felis. Suspendisse
                  auctor laoreet placerat. Nam et risus non lacus dignissim
                  lacinia sit amet nec eros. Nulla vel urna quis libero pharetra
                  varius. Nulla tellus nunc, malesuada at scelerisque eget,
                  cursus at eros. Maecenas pellentesque lacus quis erat eleifend
                  sagittis. Sed vel maximus ante.
                </p>
                <Button className="btn-light-green p-3 fw-bold">
                  Book A Package
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id="team" className="pt-5 mt-lg-5">
        <Container>
          <Row>
            <h6 className="text-light-green text-center">Our Team</h6>
            <h2 className="text-center abril-font">Awesome Tour Guides</h2>
            <p className="text-center mb-3 mb-lg-5">
              Traveling fosters a medium to build human connections with one
              another by learning about culture, food, new sites, music, and the
              way people. Traveling fosters a medium to build human connections
              with one another by learning about culture, food, new sites,
              music, and the way people.
            </p>
          </Row>
        </Container>
        <Container>
          <Row xs={1} md={2} lg={4}>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide1} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Dia Martinez
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide2} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Alexa Febrico
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide3} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Jhon Daniel
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide4} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Erica Xenifar
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter></NewsLetter>
    </>
  );
};

export default Process;
