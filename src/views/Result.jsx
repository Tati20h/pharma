import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardAdditionalData from "../components/cards/CardAdditionalData";
import { useParams } from "react-router-dom";
import { AdvertisingData } from "../services/data";
export const Result = ({ name, setName }) => {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState([]);

  useEffect(() => {
    const getFullData = async () => {
      const data = await AdvertisingData(id);
      setAdvertisement(data);
    };
    getFullData();
  }, []);

  return (
    <>
      <Header showSearch={false} name={name} setName={setName} />
      <CardAdditionalData advertisement={advertisement} />
      <Footer />
    </>
  );
};
