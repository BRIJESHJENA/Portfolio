import pro1 from "../assets/images/weatherReact.png";
import pro2 from "../assets/images/codeEditorImg.jpg";
import pro3 from "../assets/images/indianMusicGuru.png";
import pro4 from "../assets/images/artisteverse.png";
import pro5 from "../assets/images/portfolio.png";

/** Reliable CDN icons — devicon & simpleicons */
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const simpleIcon = (name: string, color?: string) =>
  color
    ? `https://cdn.simpleicons.org/${name}/${color}`
    : `https://cdn.simpleicons.org/${name}`;

/** Files live in /public/resume so they keep a clean, linkable URL. */
const resumeUrl = (file: string) => `${process.env.PUBLIC_URL}/resume/${file}`;

export const resumes = [
  {
    id: "ui",
    label: "Frontend / UI",
    summary: "React, Next.js, TypeScript and design-system work.",
    file: resumeUrl("Brijesh_3yrs_UI.pdf"),
    downloadName: "Brijesh-Jena-Frontend-Engineer.pdf",
  },
  {
    id: "fs",
    label: "Full Stack",
    summary: "The same experience framed around Node.js, APIs and databases.",
    file: resumeUrl("Brijesh_3yrs_FS.pdf"),
    downloadName: "Brijesh-Jena-Full-Stack-Developer.pdf",
  },
];

export type Resume = (typeof resumes)[number];

export const Bio = {
  name: "BRIJESH JENA",
  roles: ["Frontend Engineer", "Full Stack Developer"],
  description:
    "Frontend Engineer with 3.7+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and Material UI. I ship reusable UI systems, responsive SaaS products, and end-to-end features from requirement gathering to production — with growing full-stack depth in Node.js, Express.js, and PostgreSQL. Currently crafting creator platforms at MetaStar Media, including IndianMusicGuru and Artisteverse.",
  github: "https://github.com/BRIJESHJENA",
  email: "brijeshjena123@gmail.com",
  phone: 8910186377,
  location: "Bangalore, Karnataka, India",
  resume: resumes[0].file,
  linkedin: "https://www.linkedin.com/in/brijesh-jena",
};

export const skills = [
  {
    title: "Languages & Markup",
    skills: [
      { name: "JavaScript (ES6+)", image: devicon("javascript") },
      { name: "TypeScript", image: devicon("typescript") },
      { name: "HTML5", image: devicon("html5") },
      { name: "CSS3", image: devicon("css3") },
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
    title: "State Management",
    skills: [
      { name: "Redux", image: devicon("redux") },
      { name: "Context API", image: devicon("react") },
      { name: "Vuex / Pinia", image: simpleIcon("vuedotjs", "4FC08D") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: devicon("nodejs") },
      { name: "Express.js", image: devicon("express") },
      { name: "RESTful APIs", image: simpleIcon("fastapi", "009688") },
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
    title: "Testing & Quality",
    skills: [
      { name: "Jest", image: devicon("jest", "plain") },
      { name: "React Testing Library", image: simpleIcon("testinglibrary", "E33332") },
      {
        name: "SonarQube",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
      },
      { name: "ESLint", image: devicon("eslint", "original") },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", image: devicon("git") },
      { name: "GitHub", image: devicon("github") },
      { name: "Webpack", image: devicon("webpack") },
      { name: "Babel", image: devicon("babel") },
      { name: "Vercel", image: simpleIcon("vercel", "000000") },
      { name: "Netlify", image: devicon("netlify") },
      { name: "Jira", image: devicon("jira") },
      { name: "CI/CD", image: simpleIcon("githubactions", "2088FF") },
    ],
  },
  {
    title: "AI & Familiar With",
    skills: [
      { name: "Cursor AI", image: simpleIcon("cursor", "000000") },
      {
        name: "ChatGPT",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      },
      { name: "GitHub Copilot", image: simpleIcon("githubcopilot", "000000") },
      { name: "Socket.IO", image: simpleIcon("socketdotio", "010101") },
      { name: "AWS", image: devicon("amazonwebservices", "original-wordmark") },
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
      "• Developed and maintained scalable SaaS applications using React.js, Next.js, Vue.js, TypeScript, and Material UI for IndianMusicGuru and Artisteverse.",
      "• Built reusable UI components, shared frontend modules, responsive admin dashboards, and CMS workflows to improve scalability and consistency.",
      "• Integrated REST APIs, Firebase Authentication, third-party services, and HLS-based video streaming for secure, high-performance experiences.",
      "• Contributed to backend API development with Node.js and Express.js, supporting end-to-end feature delivery.",
      "• Debugged complex frontend issues, optimized performance, and collaborated across teams through production-ready code reviews.",
      "• Leveraged AI-assisted tools (Cursor, ChatGPT) to accelerate delivery while validating all AI-generated code before production.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "Express.js",
      "Firebase",
      "PostgreSQL",
      "HLS",
    ],
  },
  {
    id: 1,
    img: "https://static.wixstatic.com/media/97f83e_e838fc0b3cb64b34b8e19439e0e70fbc~mv2.png/v1/fit/w_2500,h_1330,al_c/97f83e_e838fc0b3cb64b34b8e19439e0e70fbc~mv2.png",
    role: "Frontend Developer",
    company: "iMemori.ai",
    date: "Aug 2022 - Aug 2024",
    desc: [
      "• Developed responsive, scalable web applications using React.js, TypeScript, and JavaScript.",
      "• Built reusable UI components that improved application scalability and maintainability.",
      "• Implemented advanced frontend features including form validation, search, filtering, pagination, and analytics dashboards.",
      "• Integrated RESTful APIs with Axios and partnered with backend teams for seamless data flow.",
      "• Integrated amCharts v5 for analytics visualization and interactive dashboards.",
      "• Wrote unit tests with Jest and React Testing Library, achieving 85%+ code coverage.",
      "• Worked extensively with SonarQube to reduce technical debt and improve maintainability.",
      "• Ensured cross-browser compatibility and mobile responsiveness across applications.",
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
      "SonarQube",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Meghnad_Saha_Institute_of_Technology_Logo.svg",
    school: "Meghnad Saha Institute of Technology",
    date: "2018 - 2021",
    degree: "B.Tech, Civil Engineering",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnSqRItNHdFKfNpakly0oEesulHprcdbG2A&s",
    school: "KIIT Polytechnic",
    date: "2014 - 2017",
    degree: "Diploma, Civil Engineering",
  },
  {
    id: 2,
    img: "https://www.schoolmykids.com/smk-media/2017/07/kvslogo1.jpg",
    school: "Kendriya Vidyalaya Command Hospital",
    date: "2013 - 2014",
    degree: "Matriculation",
  },
];

export const projects = [
  {
    id: 0,
    title: "IndianMusicGuru",
    description:
      "Learning platform for Indian classical music — live sessions, course management, authentication, and scheduling. Built end-to-end product features with React/Next.js, backend APIs, and third-party integrations to support the full student and guru workflow.",
    image: pro3,
    tags: ["React.js", "Next.js", "TypeScript", "Firebase", "Node.js", "Express.js"],
    github: "",
    webapp: "https://indianmusicguru.com/",
  },
  {
    id: 1,
    title: "Artisteverse",
    description:
      "CMS platform for creators to manage digital content, subscriptions, media assets, and orders. Designed scalable admin workflows, backend services, and payment fulfillment integrations for a direct-to-fan experience.",
    image: pro4,
    tags: ["Vue.js", "Next.js", "TypeScript", "Firebase", "CMS", "REST APIs"],
    github: "",
    webapp: "https://artisteverse.com/",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Personal portfolio built with React and TypeScript — dark/light theming, animated section reveals, and a resume preview with Frontend and Full Stack variants. Deployed on GitHub Pages.",
    image: pro5,
    tags: ["React", "TypeScript", "Material UI", "Framer Motion", "GitHub Pages"],
    github: "https://github.com/BRIJESHJENA/Portfolio",
    webapp: "https://brijeshjena.github.io/Portfolio/",
  },
  {
    id: 3,
    title: "Code Editor",
    description:
      "React-based code editor for writing and previewing HTML, CSS, and JavaScript in real time. Built with Vite — animated UI, responsive layout, and instant iframe previews for quick testing and learning.",
    image: pro2,
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Vite", "Netlify"],
    github: "https://github.com/BRIJESHJENA/codeEditor",
    webapp: "https://codeeditor-brijesh.netlify.app/",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Location-based weather app built with React, TypeScript, and Redux, powered by the OpenWeatherMap API for live forecasts and a clean, responsive UI.",
    image: pro1,
    tags: ["React", "TypeScript", "Redux", "JavaScript", "API"],
    github: "https://github.com/BRIJESHJENA/React-Weather-Web",
    webapp: "https://brijeshjena.github.io/React-Weather-Web/",
  },
  
];
