import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  unity,
  blender,
  wattsaver,
  workaid,
  halloween,
  halloween2d,
  threejs,
  smoke,
} from "../assets";
import { AboutIcon, WorkIcon, ContactIcon } from '../components/Icons';

export const navLinks = [
  {
    id: "about",
    icon: AboutIcon,
  },
  {
    id: "work",
    icon: WorkIcon,
  },
  {
    id: "contact",
    icon: ContactIcon,
  },
];

const services = [
  {
    skills: "Skills",
    title: ["Web Development", "Game Development"],
  },
];

const services3 = [
  {
    language: "Languages",
    languages: ["Tagalog", "English"],
  },
];

const services4 = [
  {
    hobby: "Hobbies",
    hobbies: ["Playing Games", "Exploring programming languages"],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Wattsavers",
    icon: wattsaver,
    iconBg: "#383E56",
    date: "February 2024 - Present",
    points: [
      "Developed using Wordpress.",
      "This company specializing in the development of government projects on a project basis.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Workaid",
    icon: workaid,
    iconBg: "#E6DEDD",
    date: "February 2024 - Present",
    points: [
      "Developed using Wordpress.",
      "This website is for businesses seeking top-notch outsourcing solutions with Workaid, your ultimate partner in business elevation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "Halloween 3D",
    description:
      "3D Game that I developed when I was in 3rd year college. You can download it in itch.io",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: halloween,
    source_code_link_github: "https://github.com/janllyod09/halloween3dgame",
    source_code_link_itch: "https://janllyodgames.itch.io/halloween",
  },
  {
    name: "Halloween 2D",
    description:
      "2D Game that I developed when I was in 2nd year college. You can play it in your browser by clicking the itch at the upper-right side.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: halloween2d,
    source_code_link_github: "https://github.com/janllyod09/halloween2dgame",
    source_code_link_itch: "https://janllyodgames.itch.io/halloween2d",
  },
  {
    name: "High Definition Render Pipeline (HDRP)",
    description:
      "3D project I made using HDRP, post-processing for the eye of Pumpkin Zombie, water surface, and lastly the fire and smoke using Visual Effect Graph.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: smoke,
    source_code_link_github: "https://github.com/janllyod09/smokeAndFire",
    source_code_link_youtube: "https://youtu.be/U_Eb1ZFAbFA",
  },
];

export { services, services3, services4, technologies, experiences, projects };
