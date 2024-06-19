import React from "react";
import FilterData from "../components/tables/FilterData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OutlinedCard from "../components/layout/OutlinedCard";

export const Home = () => {
  return (
    <>
      <Header />
      <OutlinedCard />
      <FilterData />
      <Footer />
    </>
  );
};
