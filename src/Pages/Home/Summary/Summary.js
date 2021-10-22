import React from "react";
import { Container, Row } from "react-bootstrap";

const Summary = () => {
  return (
    <section id="summary">
      <Container className="my-5 my-5">
        <Row className="my-5 py-5">
          <div className="col-12 my-5 d-lg-flex flex-wrap justify-content-around text-secondary">
            <h2 className="text-center p-3 border border-success">
              {" "}
              <i className="fas fa-globe text-light-green"></i>{" "}
              <span className="text-cyan">13+ Countries</span>
            </h2>
            <h2 className="text-center p-3 border border-success">
              {" "}
              <i className="fas fa-hotel text-light-green"></i>{" "}
              <span className="text-cyan">150+ Hotel</span>
            </h2>
            <h2 className="text-center p-3 border border-success">
              {" "}
              <i className="fas fa-hand-holding-heart text-light-green"></i>{" "}
              <span className="text-cyan">17+ Packages</span>
            </h2>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Summary;
