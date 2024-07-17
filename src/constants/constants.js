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
import vancouverOne from '../assets/collage/vancouver_land.JPG';
import vancouverTwo from '../assets/collage/vancouver_land_two.JPG';
import vancouverThree from '../assets/collage/vancouver_land_three.JPG';
import vancouverFour from '../assets/collage/vancouver_land_four.JPG';
import vancouverFive from '../assets/collage/vancouver_land_five.JPG';

import aws from '../assets/skills/aws.svg';
import c from '../assets/skills/cplusplus.svg';
import css from '../assets/skills/css.svg';
import git from '../assets/skills/git.svg';
import html from '../assets/skills/html.webp';
import java from '../assets/skills/java-nb.svg';
import js from '../assets/skills/js.webp';
import kotlin from '../assets/skills/kotlin.svg';
import linux from '../assets/skills/linux.svg';
import mongo from '../assets/skills/mongodb.svg';
import mysql from '../assets/skills/mysql.svg';
import node from '../assets/skills/node.webp';
import postgres from '../assets/skills/postgresql.svg';
import python from '../assets/skills/python.webp';
import react from '../assets/skills/react.svg';
import spring from '../assets/skills/spring.svg';
import tailwind from '../assets/skills/tw.svg';
import typescript from '../assets/skills/typescript.svg';

import {
    LinkedInLogoIcon,
    GitHubLogoIcon,
 } from "@radix-ui/react-icons";

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
    {
        location: "Vancouver, BC",
        image: vancouverOne
    },
    {
        location: "Vancouver, BC",
        image: vancouverTwo
    },
    {
        location: "Vancouver, BC",
        image: vancouverThree
    },
    {
        location: "Vancouver, BC",
        image: vancouverFour
    },
    {
        location: "Vancouver, BC",
        image: vancouverFive
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
    // {
    //     title: "Play",
    //     path: "/play",
    //     element: <Play/>
    // },
]

export const bio =
    "Full-stack developer well-versed in Agile/Scrum methodologies, proficient in delivering " +
    "full-life cycle projects, and adept at implementing tailored software solutions using diverse technologies. " +
    "Consistently delivering high-quality applications/systems that follow clean-code principles and ensure client " +
    "satisfaction. Extensive experience managing client interactions with strong interpersonal and professional " +
    "communication skills. Excels in implementing scalable and efficient backend systems, services, and APIs.\n";

export const profileLinks = [
    {
        title: "GitHub",
        url: "https://github.com/dennisongaia",
        icon: <GitHubLogoIcon />,
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/gaiadennison",
        icon: <LinkedInLogoIcon />,
    },
];

export const experiences = [
    {
        company: "Liferay",
        title: "Software Engineer",
        start: "May 2023",
        end: "December 2023",
        description:
            "Built custom software solutions, conducted ongoing project maintenance, refactored code," +
            " maintained documentation, and facilitated client interactions for customers across various sectors," +
            " including finance and healthcare. Collaborated with multinational teams on full lifecycle projects," +
            " utilizing Agile methodologies and a diverse array of technologies.\nKey achievements include:\n" +
            "\tImplemented a custom site auditing tool using Java, JSPs, and MySQL to streamline the analysis of site" +
            " data, empowering the client to efficiently filter events by site, track changes within specific sites," +
            " and conduct targeted keyword or advanced searches on site events\n" +
            "\tDeveloped custom widgets using Java, React, and MySQL to help digitize the form submission process for a" +
            " prominent banking client and facilitated the secure submission of sensitive banking and personal" +
            " information\n\tDeveloped a PDF export feature for customer banking forms using React and the React-PDF" +
            " package, enhancing user convenience and contributing to the overall modernization of the client's document" +
            " management system",
    },
    {
        company: "CPP VR Lab",
        title: "Team Lead",
        start: "October 2022",
        end: "May 2023",
        description:
            "Led the development of a Unity-based VR game using C#, tailored for educational purposes in a core" +
            " computer science course\nDirected Agile implementation across all project facets, navigating leadership" +
            " challenges and adapting to a new development paradigm\nTransformed the abstract concept of the pumping" +
            " lemma for regular languages into an immersive educational experience, enhancing understanding through" +
            " tangible interaction",
    },
    {
        company: "Amazon",
        title: "Research Assistant",
        start: "June 2022",
        end: "August 2022",
        description:
            "Led the optimization of a statistical inference framework and presented the outcomes at an" +
            " academic conference\nImplemented multiprocessing in Python for independent computations and introduced a" +
            " preprocessing transformation of the data to engineer new input features and expose possible nonlinear" +
            " feature interactions\nOptimized the framework with a 1.6x runtime speedup and 35% reduction in the root" +
            " mean squared error",
    },
];

export const skills = [
    {
        skill: "Java, Java EE",
        percent: 5,
        image: java,
    },
    {
        skill: "Python",
        percent: 10,
        image: python,
    },
    {
        skill: "C, C#, C++",
        percent: 30,
        image: c,
    },
    {
        skill: "JavaScript",
        percent: 10,
        image: js,
    },
    {
        skill: "React",
        percent: 5,
        image: react,
    },
    {
        skill: "Node.js",
        percent: 10,
        image: node,
    },
    {
        skill: "Typescript",
        percent: 20,
        image: typescript,
    },
    {
        skill: "HTML",
        percent: 20,
        image: html,
    },
    {
        skill: "CSS",
        percent: 10,
        image: css,
    },
    {
        skill: "Tailwind",
        percent: 10,
        image: tailwind,
    },
    {
        skill: "Spring, Spring Boot",
        percent: 20,
        image: spring,
    },
    {
        skill: "Kotlin",
        percent: 30,
        image: kotlin,
    },
    {
        skill: "MySQL",
        percent: 20,
        image: mysql,
    },
    {
        skill: "MongoDB",
        percent: 30,
        image: mongo,
    },
    {
        skill: "PostgreSQL",
        percent: 40,
        image: postgres,
    },
    {
        skill: "Linux, Ubuntu",
        percent: 20,
        image: linux,
    },
    {
        skill: "Git, GitHub",
        percent: 15,
        image: git,
    },
    {
        skill: "AWS",
        percent: 50,
        image: aws,
    },

]