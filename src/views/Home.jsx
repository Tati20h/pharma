import React, { useEffect, useState } from "react";
import FilterData from "../components/tables/FilterData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OutlinedCard from "../components/cards/OutlinedCard";
import { getDataByName } from "../services/api";

export const Home = ({ name, setName }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (name.length === 0) {
        setResults([]);
        return;
      }
      const results = await getDataByName(name);
      setResults(results);
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 50);

    return () => clearTimeout(delayDebounceFn);
  }, [name]);

  return (
    <>
      <Header showSearch={true} name={name} setName={setName} />
      {name === "" ? <FilterData /> : <OutlinedCard results={results} />}
      <Footer />
    </>
  );
};
