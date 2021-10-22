import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SinglePackageCard.css";

const SinglepackageCard = ({ detail }) => {
  return (
    <Col>
      <Card className="shadow-lg mb-5">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Text className="text-light-green fw-semi-bold">
              {detail.duration}
            </Card.Text>
            <h4 className="text-light-green fw-bolder">${detail.price}</h4>
          </div>

          <Card.Title className="abril-font">{`${detail?.location?.city}, ${detail?.location?.country}`}</Card.Title>

          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <p className="text-cyan">we provide: {detail.services.join(", ")}</p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Link to={`/tourdetail/${detail?.id}`}>
            <Button className="btn-abril  py-2 px-3">See Details</Button>
          </Link>
          <Button className="btn-light-green py-2 px-3">Book Now</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SinglepackageCard;
