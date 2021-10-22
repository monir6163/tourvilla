import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutInHomeOverlayImg from "../../../Assets/Images/aboutOverlay.png";

const AboutInHome = () => {
  return (
    <section id="about-in-home" className="py-5 my-5">
      <Container>
        <Row>
          <div className="col-12 col-md-8">
            <img
              src={AboutInHomeOverlayImg}
              alt="about in home"
              className="img-fluid"
            />
          </div>
          <div
            className="col-12 col-md-4 d-flex flex-wrap align-items-center"
            style={{ minHeight: "100%" }}
          >
            <div>
              <h6 className="text-light-green mb-3">About Us</h6>
              <h2 className="abril-font mb-3">A Best Place to Enjoy</h2>
              <p className="text-secondary mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                odio corporis veniam ullam quisquam nobis rerum, saepe excepturi
                perspiciatis repellendus blanditiis accusantium ut dicta.
                Dolorum commodi sint temporibus. Nemo laborum consequatur
                debitis illo fugit ipsum eius reiciendis, error id,
                exercitationem tempora ex molestias pariatur temporibus ullam
                officia odio sunt ipsa explicabo deleniti.
              </p>
              <Button className="btn-light-green p-3 fw-bold">
                More About Us
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutInHome;
