import pro1 from "../assets/images/weatherReact.png";
import pro2 from "../assets/images/foodSampatti.png";

export const Bio = {
  name: "BRIJESH JENA",
  roles: ["Frontend Developer"],
  description:
    "A skilled Frontend Developer with 2 years of experience specializing in creating robust and efficient React components. Proficient in identifying and resolving code smells to enhance code readability and maintainability. Experienced in implementing comprehensive unit tests to ensure high code coverage and reliability, significantly reducing bugs in production, well versed in implementing UIs for Chat LLMs and analytics Data points. Adept in using technologies such as React.js, Javascript, Typescript, Router, SonarQube and Jest.",
  github: "https://github.com/BRIJESHJENA",
  email: "brijeshjena123@gmail.com",
  phone: 8910186377,
  location: "Bangalore,India",
  resume:
    "https://drive.google.com/file/d/1MGuXtftYjH1HDFg4r5wxdZuXZBsTp9u-/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/brijesh-jena-071ab6215/",
  // whatImDoing:["Web Design","Web Development","Food Photography"]
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image: "https://mui.com/static/logo.png",
      },
      {
        name: "Jest",
        image:
          "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fam39icfave7sg54aynkp.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://static.wixstatic.com/media/97f83e_e838fc0b3cb64b34b8e19439e0e70fbc~mv2.png/v1/fit/w_2500,h_1330,al_c/97f83e_e838fc0b3cb64b34b8e19439e0e70fbc~mv2.png",
    role: "Frontend Developer",
    company: "iMemori.ai",
    date: "Aug 2022 - Present",
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
    skills: ["React", "MUI", "Amchart", "Jest", "JavaScript", "TypeScript"],
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
    title: "Weather App",
    description:
      "Website that provides weather information for any location you choose, using HTML, CSS, React, TypeScript, Redux, Javascript weather API have been collected from a website named 'OpenWeatherMap'.",
    image: pro1,
    tags: ["HTML", "CSS", "React", "TypeScript", "Redux", "Javascript"],
    category: "web app",
    github: "https://github.com/BRIJESHJENA/React-Weather-Web",
    webapp: "https://brijeshjena.github.io/React-Weather-Web/",
  },
  {
    id: 0,
    title: "foodSampatti",
    description:
      "I designed and developed a photography portfolio website, Food Sampatti, to showcase my photography work. The site is a visual representation of my passion for capturing culinary art, focusing on aesthetics and user experience. The website serves as an interactive gallery where visitors can explore various food photography collections.",
    image: pro2,
    tags: ["HTML", "CSS", "Javascript"],
    category: "web app",
    github: "https://github.com/BRIJESHJENA/food_sampatti",
    webapp: "https://brijeshjena.github.io/food_sampatti/home.html",
  },
];
