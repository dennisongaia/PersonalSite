import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Work from "../components/Work/Work";
import Play from "../components/Play/Play";

import coronOne from '../assets/collage/coron_land.JPG';
import coronTwo from '../assets/collage/coron_land_two.JPG';
import coronThree from '../assets/collage/coron_land_three.JPG';
import catalina from '../assets/collage/catalina_land.JPG';
import santaBarbaraOne from '../assets/collage/santa_barbara_land.JPG';
import santaBarbaraTwo from '../assets/collage/santa_barbara_land_two.JPG';

export const collageData = [
    {
        location: "Coron, Palawan",
        image: coronOne
    },
    {
        location: "Coron, Palawan",
        image: coronTwo
    },
    {
        location: "Coron, Palawan",
        image: coronThree
    },
    {
        location: "Catalina Island, CA",
        image: catalina
    },
    {
        location: "Santa Barbara, CA",
        image: santaBarbaraOne
    },
    {
        location: "Santa Barbara, CA",
        image: santaBarbaraTwo
    },
]
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