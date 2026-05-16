import pro1 from "../assets/images/weatherReact.png";
import pro2 from "../assets/images/foodSampatti.png";
import pro3 from "../assets/images/codeEditorImg.jpg";

/** Reliable CDN icons — devicon & simpleicons */
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const simpleIcon = (name: string, color?: string) =>
  color
    ? `https://cdn.simpleicons.org/${name}/${color}`
    : `https://cdn.simpleicons.org/${name}`;

export const Bio = {
  name: "BRIJESH JENA",
  roles: ["Frontend Developer"],
  description:
    "Frontend Developer with 2+ years of experience in building efficient React components, optimizing code quality, and implementing high-coverage unit tests. Skilled in React.js, JavaScript, TypeScript, Router, SonarQube, and Jest, with experience in UI development for Chat LLMs and analytics. Recently expanded into backend development with Express.js and PostgreSQL, along with working on Vue.js. Experience in Firebase integration, Facebook & Twitter authentication, and Calendly booking system implementation. Passionate about full-stack development and building scalable applications.",
  github: "https://github.com/BRIJESHJENA",
  email: "brijeshjena123@gmail.com",
  phone: 8910186377,
  location: "Bangalore,India",
  resume:
    "https://drive.google.com/file/d/1gggS0wsK5PzbMLf243gUjqbdSSrssJOW/view",
  linkedin: "https://www.linkedin.com/in/brijesh-jena-071ab6215/",
};

export const skills = [
  {
    title: "Languages & Markup",
    skills: [
      { name: "JavaScript (ES6+)", image: devicon("javascript") },
      { name: "TypeScript", image: devicon("typescript") },
      { name: "HTML5", image: devicon("html5") },
      { name: "CSS3", image: devicon("css3") },
      { name: "Vue.js", image: devicon("vuejs") },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", image: devicon("react") },
      { name: "Next.js", image: devicon("nextjs") },
      { name: "Vue.js", image: devicon("vuejs") },
      { name: "Redux", image: devicon("redux") },
      { name: "Material UI", image: simpleIcon("mui", "007FFF") },
      { name: "React Router", image: simpleIcon("reactrouter", "CA4245") },
      { name: "Bootstrap", image: devicon("bootstrap") },
      { name: "amCharts", image: simpleIcon("apacheecharts", "AA344B") },
      { name: "Axios", image: simpleIcon("axios", "5A29E4") },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", image: devicon("jest", "plain") },
      { name: "React Testing Library", image: simpleIcon("testinglibrary", "E33332") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: devicon("nodejs") },
      { name: "Express.js", image: devicon("express") },
      { name: "Firebase", image: devicon("firebase", "plain") },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", image: devicon("postgresql") },
      { name: "Firebase Firestore", image: devicon("firebase", "plain") },
    ],
  },
  {
    title: "Authentication & Integrations",
    skills: [
      { name: "Firebase Auth", image: devicon("firebase", "plain") },
      { name: "OAuth (Facebook & Twitter)", image: simpleIcon("auth0", "EB5424") },
      { name: "Calendly API", image: simpleIcon("calendly", "006BFF") },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", image: devicon("git") },
      { name: "GitHub", image: devicon("github") },
      { name: "Netlify", image: devicon("netlify") },
      { name: "Jira", image: devicon("jira") },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "GitHub", image: devicon("github") },
      { name: "VS Code", image: devicon("vscode") },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQGXCHSOIijnUw/company-logo_200_200/company-logo_200_200/0/1669363199113/metastar_media_logo?e=2147483647&v=beta&t=1WH4dhbvMTxO6myE_ak170vB9rpkY8gq5L9QhUgt808",
    role: "Full Stack Developer",
    company: "MetaStar Media",
    date: "Dec 2024 - Present",
    desc: [
      "• Developing new features and improving user experience in frontend applications using Vue.js.",
      "• Implemented login authentication by integrating Facebook and Twitter authentication mechanisms.",
      "• Worked with Firebase on both the frontend and backend for real-time data handling and user authentication.",
      "• Started backend development using Express.js, managing API endpoints and server-side logic.",
      "• Gained hands-on experience with PostgreSQL, handling database operations and optimizations.",
      "• Successfully integrated Calendly in both backend and frontend to facilitate seamless appointment booking.",
    ],
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "Javascript",
      "Vue.js",
      "BootStrap",
      "ExpressJS",
      "PostgressSQL",
      "Firebase",
    ],
  },
  {
    id: 1,
    img: "https://static.wixstatic.com/media/97f83e_e838fc0b3cb64b34b8e19439e0e70fbc~mv2.png/v1/fit/w_2500,h_1330,al_c/97f83e_e838fc0b3cb64b34b8e19439e0e70fbc~mv2.png",
    role: "Frontend Developer",
    company: "iMemori.ai",
    date: "Aug 2022 - Sept 2024",
    desc: [
      "• Developed and maintained web applications using React.js, ensuring high performance and responsiveness.",
      "• Utilized Typescript to create type-safe and efficient React components.",
      "• Using React Router for seamless navigation.",
      "• Fixed code quality issues using SonarQube, leading to improved codebase maintainability.",
      "• Managed project files and assets, ensuring proper organization and version control.",
      "• Created map and chart displays using amCharts version 5 to visualize data effectively.",
      "• Collaborated with backend developers to integrate RESTful APIs using axios.",
      "•Translated designs & wireframes into high-quality code and wrote application interface code via JavaScript ES6 following React.js and React.ts workflows.",
      "• Developed over 15 React components from scratch, including features such as form validation, tab list, grid lists, search and sort functionalities, pagination, multi-selection, tags input, and interactive charts, enhancing user interaction and data visualization capabilities.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "React Router",
      "Redux",
      "Material UI",
      "amCharts",
      "Axios",
      "Jest",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Meghnad_Saha_Institute_of_Technology_Logo.svg",
    school: "Meghnad Saha Institute of Technology, Kolkata",
    date: "Aug 2018 - Aug 2021",
    degree: "Bachelor of Technology - BTech, Civil Engineering",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnSqRItNHdFKfNpakly0oEesulHprcdbG2A&s",
    school: "KIIT Polytechnic, Bhubaneswar",
    date: "Aug 2014 - Dec 2017",
    degree: "Diploma in Civil Engineering",
  },
  {
    id: 2,
    img: "https://www.schoolmykids.com/smk-media/2017/07/kvslogo1.jpg",
    school: "Kendriya Vidyalaya Command Hospital, Kolkata",
    date: "Apr 2013 - Apr 2014",
    degree: "Matriculation",
  },
];

export const projects = [
  {
    id: 0,
    title: "Code Editor",
    description:
      "This React-based Code Editor lets users write and preview HTML, CSS, and JavaScript in real-time without external libraries. Built with Vite, it features a smooth, animated UI, responsive design, and auto-updating previews. Changes are instantly reflected in an iframe, making it a perfect tool for quick testing and learning web development.",
    image: pro3,
    tags: ["HTML", "CSS", "Javascript", "React.js", "Netlify"],
    github: "https://github.com/BRIJESHJENA/codeEditor",
    webapp: "https://codeeditor-brijesh.netlify.app/",
  },
  {
    id: 1,
    title: "Weather App",
    description:
      "Website that provides weather information for any location you choose, using HTML, CSS, React, TypeScript, Redux, Javascript weather API have been collected from a website named 'OpenWeatherMap'.",
    image: pro1,
    tags: ["HTML", "CSS", "React", "TypeScript", "Redux", "Javascript"],
    github: "https://github.com/BRIJESHJENA/React-Weather-Web",
    webapp: "https://brijeshjena.github.io/React-Weather-Web/",
  },
  {
    id: 2,
    title: "foodSampatti",
    description:
      "I designed and developed a photography portfolio website, Food Sampatti, to showcase my photography work. The site is a visual representation of my passion for capturing culinary art, focusing on aesthetics and user experience. The website serves as an interactive gallery where visitors can explore various food photography collections.",
    image: pro2,
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/BRIJESHJENA/food_sampatti",
    webapp: "https://brijeshjena.github.io/food_sampatti/home.html",
  },
];
