import React, { useEffect, useState } from "react";
import FilterData from "../components/tables/FilterData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OutlinedCard from "../components/cards/OutlinedCard";
import { getDataByName } from "../services/api";

export const Home = () => {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("mi coso ", name);
      if (name.length === 0) {
        setResults([]);
        return;
      }
      try {
        const { results } = await getDataByName(name);
        console.log(results);
        setResults(results);
      } catch (error) {
        setResults([]);
        return;
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [name]);

  return (
    <>
      <Header showSearch={true} name={name} setName={setName} />
      {name === "" ? <FilterData /> : <OutlinedCard results={results}/>}
      <Footer />
    </>
  );
};
