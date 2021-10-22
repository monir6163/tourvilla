import React from "react";
import AboutInHome from "./AboutInHome/AboutInHome";
import Banner from "./Banner/Banner";
import Destination from "./Destination/Destination";
import NewsLetter from "./NewsLetter/NewsLetter";
import PopularPackages from "./PopularPackages/PopularPackages";
import Summary from "./Summary/Summary";
import UserReview from "./userReview/UserReview";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Destination></Destination>
      <AboutInHome></AboutInHome>
      <PopularPackages></PopularPackages>
      <Summary></Summary>
      <UserReview></UserReview>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
