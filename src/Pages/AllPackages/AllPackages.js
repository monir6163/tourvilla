import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../Assets/hooks/useAuth";
import SinglepackageCard from "./SinglePackageCard/SinglepackageCard";
import NewsLetter from "../Home/NewsLetter/NewsLetter";

const AllPackages = () => {
  const { packDetails } = useAuth();
  return (
    <>
      <section
        id="allpackages"
        className="pt-5 pb-1"
        style={{ background: "#F5FBF9" }}
      >
        <Container>
          <Row>
            <div className="col-12 col-md-8 mx-auto">
              <h6 className="text-light-green text-center">All Packages</h6>
              <h2 className="text-center abril-font">Our All Packages</h2>
              <p className="text-center">
                Traveling fosters a medium to build human connections with one
                another by learning about culture, food, new sites, music, and
                the way people. Music, and the way people. Traveling fosters a
                medium to build human connections with one another by learning
                about culture, food, new sites,
              </p>
            </div>
          </Row>
          <Row xs={1} md={2} lg={3} className="my-5">
            {packDetails.map((detail) => (
              <SinglepackageCard
                key={detail.id}
                detail={detail}
              ></SinglepackageCard>
            ))}
          </Row>
        </Container>
      </section>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default AllPackages;
