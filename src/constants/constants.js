import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Work from "../components/Work/Work";
import Play from "../components/Play/Play";

export const navigationData = [
    {
        title: "About",
        path: "/",
        element: <About/>
    },
    {
        title: "Resume",
        path: "/resume",
        element: <Resume/>
    },
    {
        title: "Work",
        path: "/work",
        element: <Work/>
    },
    {
        title: "Play",
        path: "/play",
        element: <Play/>
    },
]