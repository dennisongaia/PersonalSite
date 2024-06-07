import './App.css';
import {navigationData} from "./constants/constants";

import {BrowserRouter as Router, Route, Routes, Link, useLocation} from "react-router-dom";
import ColorWash from "./components/ColorWash/ColorWash";

function App() {
    const location = useLocation();

    return (
            <div className="w-screen h-screen z-40 bg-[var(--color-gradient)]">
                <ColorWash />
                <div className="w-screen h-screen z-30">
                <Routes>
                    {navigationData.map((item) => (
                        <Route
                            key={item.title}
                            path={item.path}
                            element={item.element}
                        />
                    ))}
                </Routes>
                <header className="fixed z-20 top-0 right-0 left-0 w-full py-0 px-4">
                    <nav className="flex justify-center align-middle max-w-[1600px] mt-5 mx-0 mb-auto relative z-20">
                        <ul className="flex list-none m-0 p-[calc(1.25rem) - 10px] rounded transition-all">
                            {navigationData.map((item) => (
                                <li className="flex relative">
                                    <Link to={item.path} className={`py-1.5 px-4 my-0 mx-1 text-sm rounded transition-all
                                    flex align-middle text-[var(--color-text-secondary)] md:my-0 md:mx-1 md:py-1.5 md:px-5
                                    md:text-base ${location.pathname === item.path ? 'rounded-3xl bg-[var(--color-white50)]' : ''}`}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
                </div>
            </div>
    );
}

const Root = () => (
    <Router>
        <App />
    </Router>
)

export default Root;
