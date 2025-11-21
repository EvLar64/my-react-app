// Navbar - About.js - EL

import React from "react";

const TopRated = ({ movies = [] }) => {
    const topMovies = movies.filter(m => m.rating >= 4);

    return (
        <div style={{ padding: "2em", fontFamily: "Courier New" }}>
            <h1>Top-Rated Movies</h1>
            {topMovies.length === 0 && <p>No top-rated movies yet</p>}
            <ul>
                {topMovies.map((m, i) => (
                    <li key={i} style={{ margin: "1.5em 0" }}>
                        <strong>{m.name}</strong> &nbsp;
                        {[1, 2, 3, 4, 5].map(star => (
                            <span
                                key={star}
                                style={{ color: star <= m.rating ? "gold" : "lightgray" }}
                            >★</span>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TopRated;