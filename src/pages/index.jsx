// Navbar - index.js - EL

import React, {useState, useEffect} from "react";
import premiereImg from "../images/premiere.jpeg";

const Home = () => {
    const [movie, setMovie] = useState('');
    const [movies, setMovies] = useState(() => {
        const saved = localStorage.getItem("movies");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);
    return (
        <div style={{padding: '.5em', fontFamily: 'Courier New'}}>
            <h1>Movie Watchlist</h1>
            <br></br>
            <img src={premiereImg} alt="the classic Premiere Theater" style={{boxShadow: "4px 4px 4px rgba(0,0,0,0.3)"}}/>
            <br></br>
            <br></br>
            <input style={{boxShadow: "4px 4px 4px rgba(0,0,0,0.3)"}}
                   type="text"
                   placeholder="Enter Movie Name"
                   value={movie}
                   onChange={(e) => setMovie(e.target.value)}
            />

            <button style={{boxShadow: "4px 4px 4px rgba(0,0,0,0.3)", marginLeft: "1em"}}
                    onClick={() => {
                        if (!movie.trim()) return
                        setMovies(prev => [...prev, { name: movie, rating: 0 }])
                        setMovie('')
                    }}>
                Add
            </button>

            <ul>
                {movies.map((m, i) => (
                    <li key={i} style={{ margin: '2em 0' }}>
                        {m.name} &nbsp;
                        {[1, 2, 3, 4, 5].map(star => (
                            <span
                                key={star}
                                style={{ cursor: 'pointer', color: star <= m.rating ? 'gold' : 'lightgray' }}
                                onClick={() =>
                                    setMovies(prev =>
                                        prev.map((mv, idx) =>
                                            idx === i ? { ...mv, rating: star } : mv
                                        )
                                    )
                                }>★</span>
                        ))}
                        <button
                            onClick={() =>
                                setMovies(prev => prev.filter((_, idx) => idx !== i))
                            }
                            style={{
                                marginLeft: "1em",
                                padding: "1em",
                                fontSize: "0.8rem",
                                background: "indianred",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                boxShadow: "4px 4px 4px rgba(0,0,0,0.3)",
                            }}
                        >
                            Delete
                        </button>
                        <button style={{
                            marginLeft: "1em",
                            padding: "1em",
                            fontSize: "0.8rem",
                            boxShadow: "4px 4px 4px rgba(0,0,0,0.3)" }}
                            onClick={() =>
                                window.open(
                                    `https://www.youtube.com/results?search_query=${encodeURIComponent(
                                        m.name + ' Trailer'
                                    )}`,
                                    '_blank'
                                )
                            }
                        >Trailer Link
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Home;