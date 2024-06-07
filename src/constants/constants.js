import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export const navigationData = [
    {
        title: "About",
        path: "/",
        element: <About/>
    },
    {
        title: "Experience",
        path: "/experience",
        element: <Experience/>
    },
    {
        title: "Projects",
        path: "/projects",
        element: <Projects/>
    },
    {
        title: "Contact",
        path: "/contact",
        element: <Contact/>
    },
]