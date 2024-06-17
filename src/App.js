import './App.css';
import {navigationData} from "./constants/constants";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import ColorWash from "./components/ColorWash/ColorWash";

function App() {
    return (
        <>
            <header className="fixed z-[var(--zindex-nav)] top-0 right-0 left-0 w-full py-0 px-4">
                <NavBar/>
            </header>
            <div className="block w-screen h-screen left-0 right-0 bottom-0 top-0 absolute z-[var(--zindex-base)] overflow-hidden opacity-80">
                <div className="absolute z-[var(--zindex-2)] bg-[var(--color-gradient)] left-0 top-0 w-full h-full"/>
                <div className="w-full h-full absolute left-0 top-0 z-[var(--zindex-base)]">
                    <ColorWash/>
                </div>
            </div>
            <main className="relative z-[var(--zindex-content)] h-full w-full">
                <div className="relative z-10 w-full h-full">
                <Routes>
                    {navigationData.map((item) => (
                        <Route
                            key={item.title}
                            path={item.path}
                            element={item.element}
                        />
                    ))}
                </Routes>
                </div>
            </main>
            <footer className="">

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
