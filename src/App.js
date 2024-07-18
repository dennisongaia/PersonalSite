import './App.css'
import {navigationData, profileLinks} from './constants/constants'
import resume from './assets/resume/Gaia Dennison 2024.pdf';

import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import NavBar from './components/Nav/NavBar'
import ColorWash from './components/ColorWash/ColorWash'
import Contact from './components/Contact/Contact'
import React from 'react'

function App() {
    const location = useLocation();

    return (
        <>
            <header className="fixed z-[var(--zindex-nav)] top-0 right-0 left-0 w-full py-0 px-4">
                <NavBar/>
            </header>
            <Contact/>
            <div
                className="block w-screen h-screen left-0 right-0 bottom-0 top-0 absolute z-[var(--zindex-base)] overflow-hidden opacity-80">
                <div className="absolute z-[var(--zindex-2)] bg-[var(--color-gradient)] left-0 top-0 w-full h-full"/>
                <div className="w-full h-full absolute left-0 top-0 z-[var(--zindex-base)]">
                    <ColorWash/>
                </div>
            </div>
            <main className="relative z-[var(--zindex-content)] h-full w-full">
                <div className="relative z-10 w-full h-full">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            {navigationData.map((item) => (
                                <Route
                                    key={item.title}
                                    path={item.path}
                                    element={item.element}
                                />
                            ))}
                        </Routes>
                    </AnimatePresence>
                </div>
            </main>
            <footer className="footer grid">
                <ul className="links">
                    <li className="link-title">
                        Links
                    </li>
                    {profileLinks.map((link) => (
                        <li className="link-li">
                            <a href={link.url} className="link">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="resume">
                    <li className="link-title">
                        Documents
                    </li>
                    <li className="link-li">
                        <a href={resume} className="link" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

const Root = () => (
    <Router>
        <App/>
    </Router>
)

export default Root;
