import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Report from './pages/Report';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Reports from './pages/Reports';

const App = () => {
    const [isDarkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

    useEffect(() => {
        let theme = localStorage.getItem('theme');

        if(theme === null) {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            localStorage.setItem('theme', (isDark ? 'dark' : 'light'));
            theme = localStorage.getItem('theme');
        }

        setDarkMode(theme === 'dark' ? true : false);
    }, []);

    return (
        <div className='App' id={isDarkMode ? 'dark' : 'light'}>
            <Navbar theme={{isDarkMode, toggleDarkMode: () => {
                localStorage.setItem('theme', (!isDarkMode ? 'dark' : 'light'));
                setDarkMode(!isDarkMode);
            }}}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='report' element={<Reports/>}/>
                <Route path='report/:id' element={<Report/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
