"use client";

import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import {
  productTypes,
  filterOptionsYear,
  filterOptionsType,
} from "@/data/filterData";

export default function TwoUpCard({ dataIn }) {
  // Import data from Supabase
  let data = dataIn;

  // States
  const [filters, setFilters] = useState({year: "", type: ""});
  const [filteredJourneys, setFilteredJourneys] = useState([]);
  const [journeyDropText, setJourneyDropText] = useState("Select Journey");
  const [selectedJourney, setSelectedJourney] = useState("");

  // Filter Journeys(data)
  useEffect(() => {
    // Log filters
    console.log("Filters:", filters);
    // Filter data
    const filteredData = data.filter((journey) => {
      const yearFilter =
        filters.year === "ALL" || journey.year === filters.year;
      const typeFilter =
        filters.type === "ALL" || journey.type === filters.type;
      return yearFilter && typeFilter;
    });

    // Log filtered data
    console.log("Filtered Data:", filteredData);

    // Set filtered data
    setFilteredJourneys(filteredData);
  }, [data, filters]); // Re-run this effect when data or filters change

  // Select Journey
  function selectJourney(e) {}

  const yearFilterDropdown = {
    id: filters.year,
    value: filterOptionsYear.find((option) => option.value === filters.year),
    label: "Year: ",
    options: filterOptionsYear.map((option) => option.label),
    onChange: (e) => {
      setFilters({ ...filters, year: e.target.value });
    },
  };

  const typeFilterDropdown = {
    id: filters.type,
    value: filterOptionsType.find((option) => option.value === filters.type),
    label: "Product Type: ",
    options: filterOptionsType.map((option) => option.label),
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
  //     selectJourney(e.target.value);
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
