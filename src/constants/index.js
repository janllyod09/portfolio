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
  hris,
  yvip,
  pmt,
  apo,
  workaid_logo,
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
  {
    language: "Languages",
    languages: ["Tagalog", "English"],
  },
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
    date: "February 2023 - Present",
    points: [
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
    date: "February 2023 - Present",
    points: [
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
        color: "orange-text-gradient",
      },
    ],
    image: halloween,
    source_code_link_github: "https://github.com/janllyod09/halloween3dgame",
    source_code_link_itch: "https://janllyodgames.itch.io/halloween",
  },
  {
    name: "Halloween 2D",
    description:
      "2D Game that I developed when I was in 2nd year college. You can download it in itch.io",
    tags: [
      {
        name: "Unity",
        color: "orange-text-gradient",
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
        color: "orange-text-gradient",
      },
    ],
    image: smoke,
    source_code_link_github: "https://github.com/janllyod09/smokeAndFire",
    source_code_link_youtube: "https://youtu.be/U_Eb1ZFAbFA",
  },
];

const projects1 = [
  {
    name: "NYC - HRIS",
    description:
      "Web Application",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Alpine.js",
        color: "orange-text-gradient",
      },
    ],
    image: hris,
    site_link: "https://lightslategrey-gull-153351.hostingersite.com/login",
  },
  {
    name: "NYC - YVIP",
    description:
      "Web Application",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
    ],
    image: yvip,
    site_link: "https://nyc-yvip.com/",
  },
  {
    name: "Philippine Motorcycle Tourism",
    description:
      "Website",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
    ],
    image: pmt,
    site_link: "https://motorcycletourism.tpb.gov.ph/",
  },
  {
    name: "Apo Reef Natural Park",
    description:
      "Website",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
    ],
    image: apo,
    site_link: "https://aporeefnaturalpark.com/",
  },
  {
    name: "Workaid",
    description:
      "Website",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
    ],
    image: workaid_logo,
    site_link: "https://workaid.io/",
  },

];

export { services, technologies, experiences, projects, projects1 };
