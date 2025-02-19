// src/components/AddCity.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCity = ({ cities, setCities }) => {
    const [city, setCity] = useState({ name: "", country: "", population: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCity({ ...city, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCities([...cities, { ...city, id: cities.length + 1 }]);
        navigate("/cities");
    };

    return (
        <div>
            <h1>Add City</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={city.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" name="country" value={city.country} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Population:
                    <input type="text" name="population" value={city.population} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Add City</button>
            </form>
        </div>
    );
};

export default AddCity;
