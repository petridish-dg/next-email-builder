'use client'

import { useState, useEffect } from "react";
import Dropdown from "../../ui/Dropdown";

import {
    filterOptionsYear,
    filterOptionsType,
} from "@/data/filterData";
import { getData } from "@/app/api/route";
import styles from "./TwoUpCard.module.css";


export default function TwoUpCard(  {dataIn} ) {


    // States
    const [data, setData] = useState(dataIn);
    const [filters, setFilters] = useState({ year: "", type: "" });
    const [filteredJourneys, setFilteredJourneys] = useState([]);
    const [selectedJourney, setSelectedJourney] = useState("");

    // Selected Journey data
    let selectedJourneyData;

    // Fetch data using getData
    useEffect(() => {
        async function fetchData() {
            const fetchedData = await getData();
            if (fetchedData) {
                setData(fetchedData);
            }
        }

        fetchData();
    }, []);


    // Filter data by checking if data is loaded after first uE
    useEffect(() => {
        if (data && data.length > 0) {
            // Filter data
            const filteredData = data.filter((journey) => {
                // Check if the "year" filter is set and the journey's year matches
                const yearFilterMatch =
                    !filters.year || journey.year.toString() === filters.year;

                // Check if the "type" filter is set and the journey's type matches
                const typeFilterMatch =
                    !filters.type || journey.type === filters.type;

                // Return true if both filters match (or if no filters are set)
                return yearFilterMatch && typeFilterMatch;
            });

            // Set filtered data
            setFilteredJourneys(filteredData);
        }
    }, [data, filters]);

    // Select Journey
    function selectJourney(selectedValue) {
        // Set the selected journey
        setSelectedJourney(selectedValue);

        // Find the selected journey object
        let selectedJourneyObject = data.find((journey) => {
            return journey.name + " " + `(${journey.year})` === selectedValue;
        });

        // Log the selected journey data
        console.log("selectedJourneyData: ", selectedJourneyObject);
    }

    const yearFilterDropdown = {
        id: filters.year,
        value: filters.year,
        label: "Select Year: ",
        options: filterOptionsYear.map((option) => option.label),
        onChange: (e) => {
            setFilters({ ...filters, year: e.target.value });
        },
    };

    const typeFilterDropdown = {
        id: filters.type,
        value: filters.type,
        label: "Select Type: ",
        options: filterOptionsType.map((option) => option.label),
        onChange: (e) => {
            setFilters({ ...filters, type: e.target.value });
        },
    };

    const journeyDropdown = {
        id: selectedJourney,
        value: selectedJourney,
        label: "Select Journey: ",
        options: filteredJourneys.map(
            (journey) => journey.name + " " + `(${journey.year})`
        ),
        onChange: (e) => {
            selectJourney(e.target.value);
        },
    };

    return (
        <div className={styles["twoup-card"]}>
            <Dropdown {...yearFilterDropdown} />
            <Dropdown {...typeFilterDropdown} />
            <Dropdown {...journeyDropdown} />
        </div>
    );
}

