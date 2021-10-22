import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import ContactImg from "../../Assets/Images/contact.jpg";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact-banner" className="py-5">
        <h6 className="display-5 text-center text-abril-white">Contact Us</h6>
      </section>
      <section className="form-container py-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8 mx-auto">
              <h2 className="text-center display-3 abril-font">
                Get In Touch!
              </h2>
              <p className="text-cyan px-md-5 text-center mb-5">
                Vestibulum blandit viverra convallis. Pellentesque ligula urna,
                fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus,
                consequat eget justo in consequat.
              </p>
            </div>
          </Row>
          <Row>
            <div className="col-12 col-md-6">
              <img
                src={ContactImg}
                alt="contactImg"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 col-md-6">
              <Form>
                <Row>
                  <div className="col-12 col-md-6">
                    <label htmlFor="name" className="text-muted fw-semi-bold">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="text-muted fw-semi-bold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <label htmlFor="email" className="text-muted fw-semi-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control border-0 shadow-none py-2 my-2"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                  <div className="col-12">
                    <label
                      htmlFor="message"
                      className="text-muted fw-semi-bold"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control border-0 shadow-none py-2 mt-2 mb-3"
                      rows="3"
                      style={{ background: "#F8F8F8" }}
                    ></textarea>
                  </div>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    type="submit"
                    className="btn-light-green p-3 fw-bold"
                  >
                    Send Your Query
                  </Button>
                </Row>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Contact;
