import './App.css'
import { useState, useEffect } from 'react'
import premiereImg from './images/premiere.jpeg';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
    const [movie, setMovie] = useState('')
    const [movies, setMovies] = useState([])
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    return (
<>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route
                    path="/contact"
                    element={<Contact/>}
                />
                <Route path="/blogs" element={<Blogs/>} />
                <Route
                    path="/sign-up"
                    element={<SignUp/>}
                />
            </Routes>
        </Router>

        <div style={{ padding: '3em', fontFamily: 'Courier New'}}>

            <button onClick={() => setDarkMode(prev => !prev)}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <h1>Movie Watchlist</h1>

            <br></br>
            <br></br>

            <img src={premiereImg} alt="the classic Premiere Theater"/>

                <br></br>
            <br></br>

            <input
                type="text"
                placeholder="Enter Movie Name"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
            />
            <button
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
                                window.open(
                                    `https://www.youtube.com/results?search_query=${encodeURIComponent(
                                        m.name + ' Trailer'
                                    )}`,
                                    '_blank'
                                )
                            }
                        >
                            Trailer Link
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </>
    )
}
export default App