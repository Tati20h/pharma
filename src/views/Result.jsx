import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardAdditionalData from "../components/cards/CardAdditionalData";
import { useParams } from "react-router-dom";
import { AdvertisingData } from "../services/data";
export const Result = () => {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState([]);

  useEffect(() => {
    const getFullData = async () => {
      try {
        const data = await AdvertisingData(id);
        setAdvertisement(data);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
    getFullData();
  }, []);

  return (
    <>
      <Header showSearch={false} />
      <CardAdditionalData advertisement={advertisement} />
      <Footer />
    </>
  );
};
