// src/components/CitiesList.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CitiesList.module.css";

const CitiesList = ({ cities }) => (
    <div className={styles.container}>
        <h1 className={styles.heading}>Cities List</h1>
        <ul className={styles.cityList}>
            {cities.map(city => (
                <li key={city.id} className={styles.cityItem}>
                    <Link to={`/cities/${city.id}`} className={styles.cityLink}>{city.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default CitiesList;

