import React from "react";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Assets/hooks/useAuth";

const TourDetail = () => {
  const { tourdetailID } = useParams();
  const { packDetails } = useAuth();
  console.log(tourdetailID, packDetails);
  return (
    <section id="tourdetail" className="py-5">
      <Container>
        <Row>
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <Card className="shadow-lg mb-5">
              <div className="overflow-hidden">
                <Card.Img
                  variant="top"
                  src={packDetails[tourdetailID - 1]?.img}
                  id="cardimg"
                  className="img-fluid"
                />
              </div>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Text className="text-light-green fw-semi-bold">
                    {packDetails[tourdetailID - 1]?.duration}
                  </Card.Text>
                  <h4 className="text-light-green fw-bolder">
                    ${packDetails[tourdetailID - 1]?.price}
                  </h4>
                </div>

                <Card.Title className="abril-font">{`${
                  packDetails[tourdetailID - 1]?.location?.city
                }, ${
                  packDetails[tourdetailID - 1]?.location?.country
                }`}</Card.Title>

                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <p className="text-cyan">
                  we provide:{" "}
                  {packDetails[tourdetailID - 1]?.services.join(", ")}
                </p>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button className="btn-light-green py-2 d-block w-100">
                  Book Now
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetail;
