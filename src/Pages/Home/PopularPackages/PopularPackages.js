import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import useAuth from "../../../Assets/hooks/useAuth";
import SinglepackageCard from "../../AllPackages/SinglePackageCard/SinglepackageCard";

const PopularPackages = () => {
  const { packDetails } = useAuth();
  return (
    <section
      id="popular-packages"
      className="pt-5 mt-5"
      style={{ background: "#F5FBF9" }}
    >
      <Container>
        <Row className="mt-5">
          <h6 className="text-light-green text-center">Popular Packages</h6>
          <h2 className="text-center abril-font">Our Popular Packages</h2>
          <p className="text-center">
            Traveling fosters a medium to build human connections with one
            another by learning about culture, food, new sites, music, and the
            way people. Traveling fosters a medium to build human connections
            with one another by learning about culture, food, new sites, music,
            and the way people.
          </p>
        </Row>
        <Row xs={1} md={2} lg={3} className="mt-5">
          {packDetails.slice(0, 3).map((detail) => (
            <SinglepackageCard
              key={detail.id}
              detail={detail}
            ></SinglepackageCard>
          ))}
        </Row>
        <Row className="mb-5">
          <div className="text-center py-5">
            <Button className="btn-light-green p-3 fw-bold">
              See All Packages
            </Button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PopularPackages;
