import './App.css'
import { useState } from 'react'

function App() {
    const [movie, setMovie] = useState('')
    const [movies, setMovies] = useState([])

    return (
        <div style={{ padding: '3em', fontFamily: 'Courier New' }}>
            <h1>Movie Watchlist</h1>

            <br></br>
            <br></br>

            <img src="/images/premiere.jpeg" alt="the classic Premiere Theater"/>

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
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App