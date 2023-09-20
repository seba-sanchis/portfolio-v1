import { DiCss3, DiHtml5, DiJavascript1, DiSass } from "react-icons/di";
import {
  SiAdobexd,
  SiAmazonaws,
  SiExpress,
  SiFigma,
  SiGooglecloud,
  SiGraphql,
  SiInvision,
  SiJest,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiSketch,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const about = {
  me: "Sebastian Sanchis",
  logo: "/assets/logo.svg",
  photo: "/assets/about_sebastian-sanchis.jpg",
  gitHub: "https://github.com/seba-sanchis",
  linkedIn: "https://www.linkedin.com/in/sebastian-sanchis/",
  resume:
    "https://drive.google.com/file/d/1kN_hCDW8_VqRYq3qi69Lck1BGRzBBrbs/view?usp=share_link",
};

export const projects = [
  // {
  //   title: "Portfolio",
  //   description:
  //     "SSG that allows you to upload your projects and share your skills. They can contact you through the form.",
  //   image: "/assets/project_portfolio.png",
  //   technologies: "NextJS, styled-components.",
  //   source: "https://github.com/seba-sanchis/portfolio",
  //   visit: null,
  //   id: 0,
  // },
  // {
  //   title: "Social Media",
  //   description:
  //     "Full CRUD app to upload your posts and manage them. You must first register or sign in with Google account.",
  //   image: "/assets/project_social-media.png",
  //   technologies: "Express, MongoDB, React, Redux, Node, Sass.",
  //   source: "https://github.com/seba-sanchis/social-media",
  //   visit: "https://social-media.sebastiansanchis.com/",
  //   id: 1,
  // },
  // {
  //   title: "Search Engine",
  //   description:
  //     "Search up-to-date results, images, videos and news fetching data from Bing Web Search using RapidAPI.",
  //   image: "/assets/project_search-engine.png",
  //   technologies: "React, Tailwind CSS.",
  //   source: "https://github.com/seba-sanchis/search-engine",
  //   visit: "https://search-engine.sebastiansanchis.com/",
  //   id: 2,
  // },
  // {
  //   title: "E-commerce",
  //   description:
  //     "Features the ability to add and edit products on the go using Sanity and the integration with Stripe for checkout.",
  //   image: "/assets/project_e-commerce.png",
  //   technologies: "CSS, NextJS.",
  //   source: "https://github.com/seba-sanchis/e-commerce",
  //   visit: "https://e-commerce.sebastiansanchis.com/",
  //   id: 3,
  // },
  {
    title: "Blog",
    description:
      "Headless CMS App built with a query languaje and managed from Hygraph, a dedicated Content Management System.",
    image: "/assets/project_blog.png",
    technologies: "GraphQL, NextJS 12, Tailwind CSS.",
    source: "https://github.com/seba-sanchis/blog",
    visit: "https://blog.sebastiansanchis.com/",
    id: 0,
  },
  {
    title: "Dashboard",
    description:
      "Complete CRUD app for uploading clients and managing their purchased products. Initial sign-in required via Google account.",
    image: "/assets/project_blog.png",
    technologies: "NextJS 13, Tailwind CSS, Typescript.",
    source: "https://github.com/seba-sanchis/blog",
    visit: "https://blog.sebastiansanchis.com/",
    id: 0,
  },
  {
    title: "E-commerce",
    description:
      "Enables favoriting, easy cart management, and seamless checkout through Mercado Pago integration.",
    image: "/assets/project_blog.png",
    technologies: "NextJS 13, Tailwind CSS, Typescript.",
    source: "https://github.com/seba-sanchis/blog",
    visit: "https://blog.sebastiansanchis.com/",
    id: 0,
  },
];

export const stack = [
  { title: "Frontend" },
  { title: "Backend" },
  { title: "UI/UX" },
];

export const skills = [
  { stack: "Frontend", icon: DiCss3, technology: "CSS" },
  { stack: "Frontend", icon: SiGraphql, technology: "GraphQL" },
  { stack: "Frontend", icon: DiHtml5, technology: "HTML" },
  { stack: "Frontend", icon: DiJavascript1, technology: "JavaScript" },
  { stack: "Frontend", icon: SiJest, technology: "Jest" },
  // { stack: "Frontend", icon: SiMaterialui, technology: "Material UI" },
  { stack: "Frontend", icon: SiNextdotjs, technology: "NextJS" },
  { stack: "Frontend", icon: SiReact, technology: "React" },
  { stack: "Frontend", icon: SiRedux, technology: "Redux" },
  { stack: "Frontend", icon: DiSass, technology: "Sass" },
  {
    stack: "Frontend",
    icon: SiStyledcomponents,
    technology: "styled-components",
  },
  { stack: "Frontend", icon: SiTailwindcss, technology: "Tailwind CSS" },
  { stack: "Frontend", icon: SiTypescript, technology: "Typescript" },
  { stack: "Backend", icon: SiAmazonaws, technology: "AWS" },
  { stack: "Backend", icon: SiExpress, technology: "Express" },
  { stack: "Backend", icon: SiGooglecloud, technology: "GCP" },
  { stack: "Backend", icon: SiMongodb, technology: "MongoDB" },
  { stack: "Backend", icon: SiMongoose, technology: "Mongoose" },
  // { stack: "Backend", icon: SiMysql, technology: "MySQL" },
  { stack: "Backend", icon: SiNodedotjs, technology: "Node" },
  { stack: "Backend", icon: SiPostgresql, technology: "PostgreSQL" },
  { stack: "Backend", icon: SiSequelize, technology: "Sequelize" },
  { stack: "UI/UX", icon: SiAdobexd, technology: "Adobe Xd" },
  { stack: "UI/UX", icon: SiFigma, technology: "Figma" },
  { stack: "UI/UX", icon: SiInvision, technology: "Invision" },
  { stack: "UI/UX", icon: SiSketch, technology: "Sketch" },
];

export const experience = [
  { year: 2022, position: "Frontend Developer", company: "ConoSurIT" },
];

export const education = [
  {
    startDate: "Nov 2022",
    endDate: "Nov 2022",
    school: "Digital House",
    description: "Educational institution",
    study: "SOLID",
    image: "/assets/education_digital-house.jpg",
    link: "https://g.co/kgs/cZRwaL",
    skill: [
      "SRP: Single Responsibility Principle",
      "OCP: Open/Closed Principle",
      "LSP: Liskov Substitution Principle",
      "ISP: Interface Segregation Principle",
      "DI: Dependency Inversion",
    ],
  },
  {
    startDate: "Nov 2022",
    endDate: "Nov 2022",
    school: "Digital House",
    description: "Educational institution",
    study: "Software Design Patterns",
    image: "/assets/education_digital-house.jpg",
    link: "https://g.co/kgs/cZRwaL",
    skill: [
      "Pattern Types: Creational, Structural, and Behavioral.",
      "Creational Patterns: Singleton, Builder, Factory.",
      "Structural Patterns: Adapter, Facade, Decorator.",
      "Behavior Patterns: Strategy, Command, Observer.",
    ],
  },
  {
    startDate: "Nov 2022",
    endDate: "Nov 2022",
    school: "Digital House",
    description: "Educational institution",
    study: "Object-Oriented Programming (OOP)",
    image: "/assets/education_digital-house.jpg",
    link: "https://g.co/kgs/cZRwaL",
    skill: [
      "OOP with JavaScript and TypeScript.",
      "Pillars of OOP: Encapsulation, Inheritance, Polymorphism, Abstraction.",
      "Interfaces",
    ],
  },
  {
    startDate: "Oct 2022",
    endDate: "Oct 2022",
    school: "Digital House",
    description: "Educational institution",
    study: "Deployment with Amazon Web Services (AWS)",
    image: "/assets/education_digital-house.jpg",
    link: "https://g.co/kgs/cZRwaL",
    skill: [
      "Client–server model",
      "Transmission Control Protocol (TCP)",
      "Internet Protocol Suite (TCP/IP)",
      "Hypertext Transfer Protocol (HTTP)",
      "Hypertext Transfer Protocol Secure (HTTPS)",
      "Domain",
      "Hosting",
      "AWS IAM",
      "AWS EC2",
      "AWS Load Balancer",
      "AWS Security Groups",
      "AWS RDS",
      "AWS S3",
    ],
  },
  {
    startDate: "Sep 2022",
    endDate: "Sep 2022",
    school: "Digital House",
    description: "Educational institution",
    study: "Payment Gateway Integration (Mercado Pago)",
    image: "/assets/education_digital-house.jpg",
    link: "https://g.co/kgs/cZRwaL",
    skill: [
      "Integrations with online stores",
      "Previous requirements",
      "Integration flow",
      "Checkout Pro integration",
    ],
  },
  {
    startDate: "Sep 2022",
    endDate: "Sep 2022",
    school: "Digital House",
    description: "Educational institution",
    study: "Test-Driven Development (TDD)",
    image: "/assets/education_digital-house.jpg",
    link: "https://g.co/kgs/cZRwaL",
    skill: [
      "Automated testing",
      "Testing in Node.js with Jest",
      "Test-driven development in Node.js",
      "Coding Katas",
    ],
  },
  {
    startDate: "Aug 2022",
    endDate: "Sep 2022",
    school: "Meta",
    description: "Technology company",
    study: "Front-End Development",
    image: "/assets/education_meta.jpg",
    link: "https://g.co/kgs/u63y1h",
    skill: [
      "Describe the web developer job role.",
      "Distinguish between front-end, back-end, and full-stack developers.",
      "Explain how data moves through the internet.",
      "Describe the technologies that underpin the internet.",
      "Use HTML to create a simple web page.",
      "Use CSS to define style of a simple web page.",
      "Outline the concepts that exist in most UI frameworks using bootstrap as an example to directly reference common practice.",
      "Use the Bootstrap CSS Framework to create webpages.",
      "Leverage bootstrap documentation to reproduce and modify CSS components.",
      "Use bootstrap themes.",
      "Describe the basics of react in relation to other frameworks and web technologies.",
    ],
  },
  {
    startDate: "Jul 2022",
    endDate: "Aug 2022",
    school: "Google",
    description: "Technology company",
    study: "Web Development",
    image: "/assets/education_google.png",
    link: "https://g.co/kgs/RUqd6f",
    skill: [
      "Web history.",
      "How the website works.",
      "How to write a web page.",
      "How a website is published.",
      "How to write a well-structured web page.",
      "How to define the presentation of a web page.",
      "How the presentation of the elements of a web page is defined.",
      "How to make a web page.",
      "How do you make a website successful?.",
    ],
  },
  {
    startDate: "Aug 2021",
    endDate: "Feb 2022",
    school: "Digital House",
    description: "Educational institution",
    study: "Full Stack Web Developer",
    image: "/assets/education_digital-house.jpg",
    link: "https://g.co/kgs/cZRwaL",
    skill: [
      "CSS",
      "Express.js",
      "Git",
      "GitHub",
      "HTML",
      "JavaScript",
      "JSON",
      "Model-View-Controller (MVC)",
      "MySQL",
      "Node.js",
      "React.js",
      "Representational State Transfer (REST)",
      "Scrum",
      "Sequelize.js",
      "SQL",
    ],
  },
  {
    startDate: "Dec 2020",
    endDate: "Jun 2021",
    school: "Coder House",
    description: "Educational institution",
    study: "UI/UX Designer",
    image: "/assets/education_coder-house.jpg",
    link: "https://g.co/kgs/XkngZy",
    skill: [
      "Atomic Design",
      "Benchmarking",
      "Moodboard",
      "Motion UI",
      "POV & MVP",
      "UI Kits",
      "User Experience Design (UED)",
      "Userflows",
      "UX Research",
      "UX Writing",
      "Wireframes",
    ],
  },
];

export const contact = {
  image: "/assets/contact_email.png",
};
