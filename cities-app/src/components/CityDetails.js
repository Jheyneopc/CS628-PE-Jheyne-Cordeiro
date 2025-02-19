// src/components/CityDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const CityDetails = ({ cities }) => {
    const { id } = useParams();
    const city = cities.find(city => city.id === parseInt(id));

    if (!city) {
        return <div>City not found</div>;
    }

    return (
        <div>
            <h1>{city.name}</h1>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
        </div>
    );
};

export default CityDetails;
