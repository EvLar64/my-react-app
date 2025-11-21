import './App.css'
import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index";
import TopRated from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    return (
<>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/index" element={<Home/>} />
                <Route path="/about" element={<TopRated />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/blogs" element={<Blogs/>} />
            </Routes>
        </Router>
    <button style={{boxShadow: "4px 4px 4px rgba(0,0,0,0.3)", padding: '1em', fontFamily: 'Courier New'}} onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    </>
    )
}
export default App