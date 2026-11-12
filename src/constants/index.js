import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  unity,
  blender,
  wattsaver,
  halloween,
  halloween2d,
  threejs,
  smoke,
  yvip,
  pmt,
  apo,
  coopbizLogo,
  yimsLogo,
  pydiLogo,
  posbmsLogo,
  pmfsLogo,
  ndcLogo,
  nycHrisLogo,
  jjwcLogo,
  cdcLogo,
  peatcLogo,
  ursLogo,
  niaLogo,
  rtfLogo,
  tpbLogo,
  cdaLogo,
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
    title: "Junior System Developer",
    company_name: "Cooperative Development Authority",
    icon: cdaLogo,
    iconBg: "#ffffff",
    date: "2025 - Present",
    points: [
      "Developing and maintaining internal systems that support government operations and employee workflows.",
      "Contributing to responsive interfaces, backend services, and organization-specific system requirements.",
      "Supporting testing, issue resolution, deployment, and continuous system improvements.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Transcend Enterprise Solutions",
    icon: pmfsLogo,
    iconBg: "#ffffff",
    date: "2024 - Present",
    points: [
      "Building government and enterprise systems using Laravel, Vue.js, Livewire, TypeScript, and React Native.",
      "Translating operational requirements into maintainable web and mobile application workflows.",
      "Supporting project delivery through testing, deployment, client-specific configuration, and ongoing improvements.",
    ],
  },
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
      "Human resource information system for the National Youth Commission.",
    group: "Wattsavers",
    shortName: "NY",
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
    image: nycHrisLogo,
    image_fit: "contain",
    site_link: "https://nyc-hris.com/login",
  },
  {
    name: "CoopBiz",
    description: "Cross-platform mobile application serving the cooperative sector, available on Android and iOS.",
    group: "Wattsavers",
    shortName: "CB",
    accent: "from-emerald-500 to-cyan-600",
    image: coopbizLogo,
    image_fit: "contain",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Expo", color: "green-text-gradient" },
      { name: "TypeScript", color: "orange-text-gradient" },
    ],
  },
  {
    name: "Youth Information Management System",
    description: "Information platform for organizing youth records and supporting program workflows.",
    group: "Wattsavers",
    shortName: "YI",
    accent: "from-orange-500 to-rose-600",
    image: yimsLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
    ],
  },
  {
    name: "Philippine Youth Development Index",
    description: "Government data system for managing and presenting youth development index information.",
    group: "Transcend",
    shortName: "PY",
    accent: "from-violet-500 to-fuchsia-600",
    image: pydiLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
  },
  {
    name: "POSB Management System",
    description: "Internal management platform for consolidating operational records and workflows.",
    group: "Transcend",
    shortName: "PO",
    accent: "from-sky-500 to-indigo-600",
    image: posbmsLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
  },
  {
    name: "Project Monitoring & Financial System",
    description: "Company-wide system for tracking projects, delivery progress, and related financial activity.",
    group: "Transcend",
    shortName: "PM",
    accent: "from-lime-500 to-emerald-600",
    image: pmfsLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "REST API", color: "blue-text-gradient" },
      { name: "Reporting", color: "green-text-gradient" },
    ],
    site_link: "https://pmfs.transcend-enterprise.com/",
  },
  {
    name: "NDC - HRIS",
    description: "Human resource information system supporting NDC employee and administrative HR workflows.",
    group: "Wattsavers",
    shortName: "ND",
    accent: "from-blue-500 to-violet-600",
    image: ndcLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    site_link: "https://hris.ndc.gov.ph/login",
  },
  {
    name: "JJWC - HRIS",
    description: "HR information system adapted for JJWC employee records and administrative processes.",
    group: "Wattsavers",
    shortName: "JJ",
    accent: "from-rose-500 to-orange-500",
    image: jjwcLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "PDF Reports", color: "blue-text-gradient" },
    ],
    site_link: "https://jjwc-hris.itwattsavers.com/login",
  },
  {
    name: "CDC - HRIS",
    description: "Human resource information system tailored to Clark Development Corporation operations.",
    group: "Wattsavers",
    shortName: "CD",
    accent: "from-cyan-500 to-blue-600",
    image: cdcLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "Auditing", color: "blue-text-gradient" },
    ],
    site_link: "https://hris.clark.com.ph/login",
  },
  {
    name: "Billing & Collection Management System",
    description: "Web platform for structured billing, collection, and finance-related operational workflows.",
    group: "Transcend",
    shortName: "BC",
    accent: "from-amber-500 to-orange-600",
    image: ndcLogo,
    image_fit: "contain",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
    ],
    site_link: "https://ndc-bms.transcend-enterprise.com/login",
  },
  {
    name: "NDC Asset Management System",
    description: "Enterprise platform for managing organizational assets, records, schedules, and activity.",
    group: "Transcend",
    shortName: "AM",
    accent: "from-green-500 to-teal-600",
    image: ndcLogo,
    image_fit: "contain",
    tags: [
      { name: "Vue 3", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Laravel", color: "orange-text-gradient" },
    ],
    site_link: "https://ndc-ams.transcend-enterprise.com/login",
  },
  {
    name: "NDC Procurement Management System",
    description: "Workflow-driven procurement platform for structured requests, tracking, and oversight.",
    group: "Transcend",
    shortName: "PR",
    accent: "from-teal-500 to-cyan-600",
    image: ndcLogo,
    image_fit: "contain",
    tags: [
      { name: "Vue 3", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Laravel", color: "orange-text-gradient" },
    ],
    site_link: "https://ndc-pms.transcend-enterprise.com/login",
  },
  {
    name: "National Development Company Website",
    description: "Public-facing corporate website presenting NDC programs, investments, and resources.",
    group: "Transcend",
    shortName: "NW",
    accent: "from-blue-500 to-sky-600",
    image: ndcLogo,
    image_fit: "contain",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Responsive UI", color: "green-text-gradient" },
    ],
    site_link: "https://www.ndc.gov.ph/",
  },
  {
    name: "PEATC - HRIS",
    description: "Tailored HR platform for digitizing employee records and administrative workflows.",
    group: "Transcend",
    shortName: "PE",
    accent: "from-purple-500 to-indigo-600",
    image: peatcLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    site_link: "https://peatc-hris.transcend-enterprise.com/login",
  },
  {
    name: "URS - HRIS",
    description: "Human resource platform configured for university employee and administrative requirements.",
    group: "Transcend",
    shortName: "UR",
    accent: "from-pink-500 to-rose-600",
    image: ursLogo,
    image_fit: "contain",
    tags: [
      { name: "Laravel", color: "orange-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "PDF Reports", color: "blue-text-gradient" },
    ],
    site_link: "https://urs-hris.transcend-enterprise.com/login",
  },
  {
    name: "National Irrigation Administration Website",
    description: "Migration of the NIA public website from Drupal to WordPress with accessible public content.",
    group: "Wattsavers",
    shortName: "NI",
    accent: "from-green-500 to-lime-600",
    image: niaLogo,
    image_fit: "contain",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Drupal Migration", color: "orange-text-gradient" },
      { name: "WCAG", color: "green-text-gradient" },
    ],
    site_link: "https://nia.gov.ph/",
  },
  {
    name: "Regional Travel Fair Website",
    description: "Tourism event website supporting Regional Travel Fair content, registration, and information.",
    group: "Wattsavers",
    shortName: "RT",
    accent: "from-yellow-500 to-orange-600",
    image: rtfLogo,
    image_fit: "contain",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Responsive UI", color: "green-text-gradient" },
    ],
    site_link: "https://rtf.tpb.gov.ph/",
  },
  {
    name: "Tourism Promotions Board Website",
    description: "Hosting and operational support for the Tourism Promotions Board public website.",
    group: "Wattsavers",
    shortName: "TP",
    accent: "from-cyan-500 to-teal-600",
    image: tpbLogo,
    image_fit: "contain",
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "Web Hosting", color: "green-text-gradient" },
      { name: "Site Operations", color: "orange-text-gradient" },
    ],
    site_link: "https://tpb.gov.ph/",
  },
  {
    name: "NYC - YVIP",
    description:
      "A web platform for managing youth volunteer information, profiles, and participation records.",
    group: "Wattsavers",
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
      "A public tourism website showcasing motorcycle routes, destinations, events, and travel content across the Philippines.",
    group: "Wattsavers",
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
      "A public website presenting Apo Reef Natural Park, visitor information, conservation content, and destination resources.",
    group: "Wattsavers",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
    ],
    image: apo,
    site_link: "https://aporeefnaturalpark.com/",
  },
];

export { services, technologies, experiences, projects, projects1 };
