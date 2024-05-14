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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "My Works",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services = [
  {
    skills: "Skills",
    title: ["Web Developer", "Game Developer"],
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, services3, services4, technologies, experiences, testimonials, projects };
