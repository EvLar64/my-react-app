// Navbar - contact.js - EL

import React from "react";

const topMovies = [
    { rank: 1, title: "A Minecraft Movie", boxOffice: 423949195, releaseDate: "Apr 4" },
    { rank: 2, title: "Lilo & Stitch", boxOffice: 423778855, releaseDate: "May 23" },
    { rank: 3, title: "Superman", boxOffice: 354184465, releaseDate: "Jul 11" },
    { rank: 4, title: "Jurassic World: Rebirth", boxOffice: 339640400, releaseDate: "Jul 2" },
    { rank: 5, title: "Sinners", boxOffice: 279653537, releaseDate: "Apr 18" },
    { rank: 6, title: "The Fantastic Four: First Steps", boxOffice: 274286610, releaseDate: "Jul 25" },
    { rank: 7, title: "How to Train Your Dragon", boxOffice: 262958100, releaseDate: "Jun 13" },
    { rank: 8, title: "Captain America: Brave New World", boxOffice: 200500001, releaseDate: "Feb 14" },
    { rank: 9, title: "Mission: Impossible - The Final Reckoning", boxOffice: 197413515, releaseDate: "May 23" },
    { rank: 10, title: "Thunderbolts*", boxOffice: 190274328, releaseDate: "May 2" },
    { rank: 11, title: "F1: The Movie", boxOffice: 189527111, releaseDate: "Jun 27" },
    { rank: 12, title: "The Conjuring: Last Rites", boxOffice: 177742735, releaseDate: "Sep 5" },
    { rank: 13, title: "Weapons", boxOffice: 151550044, releaseDate: "Aug 8" },
    { rank: 14, title: "Final Destination: Bloodlines", boxOffice: 138130814, releaseDate: "May 16" },
    { rank: 15, title: "Demon Slayer: Kimetsu no Yaiba - Infinity Castle", boxOffice: 133960440, releaseDate: "Sep 12" },
    { rank: 16, title: "Mufasa: The Lion King", boxOffice: 126423748, releaseDate: "Dec 20" },
    { rank: 17, title: "Dog Man", boxOffice: 97970355, releaseDate: "Jan 31" },
    { rank: 18, title: "Freakier Friday", boxOffice: 94186236, releaseDate: "Aug 8" },
    { rank: 19, title: "Snow White", boxOffice: 87203963, releaseDate: "Mar 21" },
    { rank: 20, title: "Sonic the Hedgehog 3", boxOffice: 84556206, releaseDate: "Dec 20" }
];

const Contact = () => {
    const maxBoxOffice = Math.max(...topMovies.map(m => m.boxOffice));
    const top10 = topMovies.slice(0, 10);
    const next10 = topMovies.slice(10, 20);
    return (
        <div style={{ padding: "3em", fontFamily: "Courier New" }}>
            <h1 style={{ textAlign: "center", padding: "0.5em", fontSize: "2em"}}>
                Top 10 Highest Grossing Movies in the U.S. (2025)
            </h1>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {top10.map(movie => (
                    <li key={movie.rank} style={{
                        marginBottom: "2em",
                        padding: "1em",
                        boxShadow: "4px 4px 4px rgba(0,0,0,0.2)",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "0.5em" }}>
                            #{movie.rank} — {movie.title}
                        </div>
                        <div style={{ color: "gray", marginBottom: "0.5em" }}>
                            Released: {movie.releaseDate}
                        </div>
                        <div style={{ marginBottom: "0.5em" }}>
                            Box Office: ${movie.boxOffice.toLocaleString()}
                        </div>
                        <div style={{
                            background: "lightgray",
                            borderRadius: "6px",
                            height: "20px",
                            overflow: "hidden"
                        }}>
                            <div style={{
                                width: `${(movie.boxOffice / maxBoxOffice) * 100}%`,
                                background: "darkolivegreen",
                                height: "100%"
                            }}></div>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 style={{ textAlign: "center", marginTop: "3em", marginBottom: "1em", fontSize: "1.5em" }}>
                Ranks 11–20
            </h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {next10.map(movie => (
                    <li key={movie.rank} style={{
                        marginBottom: "1em",
                        padding: "0.5em",
                        borderBottom: "1px solid #ccc",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <span>#{movie.rank} — {movie.title}</span>
                        <span style={{ color: "gray" }}>${movie.boxOffice.toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Contact;