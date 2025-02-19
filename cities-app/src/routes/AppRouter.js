// src/routes/AppRouter.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CitiesList from "../components/CitiesList";
import AddCity from "../components/AddCity";
import CityDetails from "../components/CityDetails";

const AppRouter = () => {
    const [cities, setCities] = useState([
        { id: 1, name: "Seattle", country: "USA", population: "733,919" },
        // Add more cities if you like
    ]);

    return (
        <Router>
            <div>
                <nav>
                    <a href="/cities">Cities List</a> | 
                    <a href="/add-city">Add City</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Navigate to="/cities" />} />
                    <Route path="/cities" element={<CitiesList cities={cities} />} />
                    <Route path="/add-city" element={<AddCity cities={cities} setCities={setCities} />} />
                    <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
