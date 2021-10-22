import React from "react";
import { Container, Row, Button, Carousel } from "react-bootstrap";
import user1 from "../../../Assets/Images/user1.jpg";
import user2 from "../../../Assets/Images/user2.jpg";
import user3 from "../../../Assets/Images/user3.jpg";

const UserReview = () => {
  return (
    <section
      id="review"
      className="py-5 my-5"
      style={{ vackgroundColor: "#F5FBF9" }}
    >
      <Container>
        <Row className="mt-5">
          <div
            className="col-12 col-md-6 d-flex flex-wrap align-items-center"
            style={{ minHeight: "100%" }}
          >
            <div>
              <h6 className="text-light-green mb-3">User Review</h6>
              <h2 className="abril-font mb-3">
                Our Clients Are Important To Us
              </h2>
              <p className="text-secondary mb-3 px-md-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                odio corporis veniam ullam quisquam nobis rerum, saepe excepturi
                perspiciatis repellendus blanditiis accusantium ut dicta.
                Dolorum commodi sint temporibus. Nemo laborum consequatur
                debitis illo fugit ipsum eius reiciendis, error id,
                exercitationem tempora ex molestias pariatur temporibus ullam
                officia odio sunt ipsa explicabo deleniti.
              </p>
              <Button className="btn-light-green p-3 fw-bold">
                Know Booking Process
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-wrap">
            <Carousel fade className=" pt-5 pt-md-0">
              <Carousel.Item>
                <div className="single-item text-center">
                  <img
                    src={user1}
                    alt="user1"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100%",
                      objectFit: "cover",
                      display: "block",
                      margin: "0px auto",
                    }}
                  />
                  <h6 className="abril-font my-3">BENJIR WALTON</h6>
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                  </div>
                  <p className="text-secondary px-md-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit commodi optio eaque, fuga voluptates aut, atque
                    facere quam ducimus dicta beatae, autem blanditiis animi.
                    Quas!
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="single-item text-center">
                  <img
                    src={user2}
                    alt="user1"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100%",
                      objectFit: "cover",
                      display: "block",
                      margin: "0px auto",
                    }}
                    y
                  />
                  <h6 className="abril-font my-3">AUSTIN ZOZO</h6>
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                  </div>
                  <p className="text-secondary px-md-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit commodi optio eaque, fuga voluptates aut, atque
                    facere quam ducimus dicta beatae, autem blanditiis animi.
                    Quas!
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="single-item text-center">
                  <img
                    src={user3}
                    alt="user1"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100%",
                      objectFit: "cover",
                      display: "block",
                      margin: "0px auto",
                    }}
                  />
                  <h6 className="abril-font my-3">DIMITRI MENDELIF</h6>
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                  </div>
                  <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit commodi optio eaque, fuga voluptates aut, atque
                    facere quam ducimus dicta beatae, autem blanditiis animi.
                    Quas!
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default UserReview;
