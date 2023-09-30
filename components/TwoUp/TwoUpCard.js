"use client";

import { useState, useEffect } from "react";
import Dropdown from "../ui/Dropdown";
import {
    productTypes,
    filterOptionsYear,
    filterOptionsType,
} from "@/data/filterData";

export default function TwoUpCard({ dataIn }) {
    // Import data from Supabase
    let data = dataIn;

    // States
    const [filters, setFilters] = useState({ year: "", type: "" });
    const [filteredJourneys, setFilteredJourneys] = useState([]);
    const [journeyDropText, setJourneyDropText] = useState("Select Journey");
    const [selectedJourney, setSelectedJourney] = useState("");

    // Filter Journeys(data)
    useEffect(() => {
        // Log filters
        console.log("Filters:", filters);
        // Filter data
        const filteredData = data.filter((journey) => {
            console.log("Journey Year:", typeof journey.year);
            console.log("Filter Year:", typeof filters.year);
            // Check if the "year" filter is set and the journey's year matches
            const yearFilterMatch =
                !filters.year || journey.year.toString() === filters.year;

            // Check if the "type" filter is set and the journey's type matches
            const typeFilterMatch =
                !filters.type || journey.type === filters.type;

            // Return true if both filters match (or if no filters are set)
            return yearFilterMatch && typeFilterMatch;
        });

        // Log filtered data
        console.log("Filtered Data:", filteredData);

        // Set filtered data
        setFilteredJourneys(filteredData);
    }, [data, filters]); // Re-run this effect when data or filters change

    // Select Journey
    function selectJourney(e) {
        console.log(e);
    }

    const yearFilterDropdown = {
        id: filters.year,
        value: filters.year,
        label: "Year: ",
        options: filterOptionsYear.map((option) => option.label),
        onChange: (e) => {
            setFilters({ ...filters, year: e.target.value });
        },
    };

    const typeFilterDropdown = {
        id: filters.type,
        value: filters.type,
        label: "Product Type: ",
        options: filterOptionsType.map((option) => option.label),
        onChange: (e) => {
            setFilters({ ...filters, type: e.target.value });
        },
    };

    const journeyDropdown = {
        id: selectedJourney,
        value: selectedJourney,
        label: "Journey",
        placeholder: journeyDropText,
        options: filteredJourneys.map(
            (journey) => journey.name + " " + `(${journey.year})`
        ),
        onChange: (e) => {
            selectJourney(e.target.value);
        },
    };

    return (
        <>
            <Dropdown {...yearFilterDropdown} />
            <Dropdown {...typeFilterDropdown} />
            <Dropdown {...journeyDropdown} />
        </>
    );
}
