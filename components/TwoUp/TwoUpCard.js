"use client";

import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import {
  productTypes,
  filterOptionsYear,
  filterOptionsType,
} from "@/data/filterData";

export default function TwoUpCard({ dataIn }) {
  let data = dataIn;
  const [filters, setFilters] = useState({
    year: "ALL",
    type: "ALL",
  });

  const [filteredJourneys, setFilteredJourneys] = useState([]);
  const [journeyDropText, setJourneyDropText] = useState("Select Journey");
  const [selectedJourney, setSelectedJourney] = useState("");

  // Filter Journeys(data)
  useEffect(() => {
    console.log("Filters:", filters);
    const filteredData = data.filter((journey) => {
      const yearFilter =
        filters.year === "ALL" || journey.year === filters.year;
      const typeFilter =
        filters.type === "ALL" || journey.type === filters.type;
      return yearFilter && typeFilter;
    });
    console.log("Filtered Data:", filteredData);
    setFilteredJourneys(filteredData);
  }, [data, filters]); // Re-run this effect when data or filters change

  // Select Journey
  function selectJourney() {}

  const yearFilterDropdown = {
    id: filters.year,
    value: filters.label,
    label: "Year",
    options: filterOptionsYear,
    onChange: (e) => {
      setFilters({ ...filters, year: e.target.value });
    },
  };

  const typeFilterDropdown = {
    id: filters.type,
    value: filters.type,
    label: "Product Type",
    options: ["ALL", ...productTypes],
    onChange: (e) => {
      setFilters({ ...filters, type: e.target.value });
    },
  };

  // const journeyDropdown = {
  //   id: filters.type,
  //   value: selectedJourney,
  //   label: "Journey",
  //   placeholder: journeyDropText,
  //   options: filteredJourneys.map((journey) => journey.name),
  //   onChange: (e) => {
  //     setJourney(e.target.value);
  //   },
  // };

  return (
    <>
      <Dropdown {...yearFilterDropdown} />
      <Dropdown {...typeFilterDropdown} />
      {/* <Dropdown {...journeyDropdown} /> */}
    </>
  );
}
