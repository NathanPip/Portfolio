export interface skill {
  id: string;
  title: string;
  src: string;
  desc: string;
  color: string;
}

export interface project {
  id: string;
  title: string;
  thumbnail: string;
  alert?: string;
  demo?: string;
  desc: string;
  skills: Array<string>;
  filter?: Array<string>;
  github?: string;
  live?: string;
}

interface PortfolioData {
  SKILLS_DATA: Array<skill>,
  PROJECTS_DATA: Array<project>
}

export const twitterKeywordList = [
  "#100DaysOfCode",
  "#coding",
  "#webdevelopment",
  "#webdev",
];

const DATA: PortfolioData = {
  SKILLS_DATA: [
    {
      id: "html",
      title: "HTML",
      src: "https://img.icons8.com/ios/250/000000/html-5--v2.png",
      desc: "Knowledge in accessibility and SEO requirements, WCAG principles, and writing clean semantic elements",
      color: "#f3722c"
    },
    {
      id: "css",
      title: "CSS",
      src: "https://img.icons8.com/ios/250/000000/css3.png",
      desc: "a deep understanding of the box-model, adept proficiency in using flex-box and grid, and the ability to turn any design into reality",
      color: "#43aa8b"
    },
    {
      id: "js",
      title: "Javascript",
      src: "https://img.icons8.com/ios/250/000000/javascript--v1.png",
      desc: "knowledge in es6 syntax, Ajax and async processing, the event loop and general OOP and functional programming concepts",
      color: "#f9c74f"
    },
    {
      id: "sass",
      title: "Sass",
      src: "https://img.icons8.com/ios-filled/250/000000/sass.png",
      desc: "knowledge in all sass concepts including modules, variables, mixins, nesting, and loops",
      color: "#cc6699"
    },
    {
      id: "react",
      title: "React",
      src: "https://img.icons8.com/wired/256/000000/react.png",
      desc: "knowledge in everything from routing, to class and functional components, to custom hooks, I can create any UI you could imagine",
      color: "#61DBFB"
    },
    {
      id: "node",
      title: "Node",
      src: "https://img.icons8.com/windows/256/000000/node-js.png",
      desc: "knowledge of the node package manager as well as server-side rendering, view-engines, routing, and building RESTful apis",
      color: "#34ec5c"
    },
    {
      id: "express",
      title: "Express",
      src: "https://img.icons8.com/windows/256/000000/node-js.png",
      desc: "knowledge in express routing and using express HTTP methods and middlewear",
      color: "#577590"
    },
    // {
    //   id: "sql",
    //   title: "SQL",
    //   src: "https://img.icons8.com/ios/100/000000/database.png",
    //   desc:
    //     "knowledge in querying Postgres and MySQL databases using SQL",
    //   color: "#00758f"
    // },
    {
      id: "git",
      title: "Git",
      src: "https://img.icons8.com/ios/250/000000/git.png",
      desc: "understanding of version control and git workflows as well as pushing and pulling from remote repositories on github",
      color: "#f94144"
    },
    {
      id: "jira",
      title: "Jira",
      src: "https://img.icons8.com/ios/250/000000/jira.png",
      desc: "understanding of working with jira for project management using kanban boards or other similar project management layouts",
      color: "#4389f1"
    },
  ],

  PROJECTS_DATA: [
    {
      id: "players-plug",
      title: "Player's Plug",
      thumbnail: "/imgs/players-plug-img.png",
      alert:
        "Alert: Project deployed using Heroku so wait 10-15 seconds for site to load.",
      demo: "Demo Login: EMAIL: demo@demo.com PW: demodemo",
      desc: "Player's Plug is a web app that allows users to view the best pc video game deals across the entire web and add them to a wishlist if they make an account.",
      skills: [
        "react",
        "sass",
        "vite",
        "steam api",
        "cheapshark api",
        "node",
        "express",
        "firebase",
        "PostgreSQL",
      ],
      filter: ["Featured", "Cool Projects"],
      github: "https://github.com/NathanPip/game-deals-site",
      live: "https://players-plug.herokuapp.com/",
    },
    {
      id: "kanban-board",
      title: "Kanban Board",
      thumbnail: "/imgs/kanban-board-img.png",
      desc: "A Kanban Board web app that I created to help manage my projects.",
      skills: ["javascript", "sass", "html", "vite"],
      filter: ["Featured", "Cool Projects"],
      github: "https://github.com/NathanPip/Kanban-Board",
      live: "https://gitban.netlify.app/",
    },
    {
      id: "thecurated",
      title: "TheCurated.tv",
      thumbnail: "/imgs/thecurated.png",
      desc: "A multi user 3d ecommerce experience written using A-Frame and WebRTC.",
      skills: ["AFrame", "Three.js", "WebGL", "Javascript", "HTML", "CSS", "WebRTC"],
      filter: ["Featured", "Client Work", "Cool Projects"],
      live: "https://thecurated.tv",
    },
    {
      id: "artfx-info",
      title: "Artfx META Landing Page",
      thumbnail: "/imgs/artfx-inbound.png",
      desc: "The landing page for Artfx META's main product.",
      skills: ["Vue", "CSS", "HTML", "Vite"],
      filter: ["Client Work"],
      live: "https://inbound.artfx.info",
    },
    {
      id: "canvas-arcade",
      title: "Canvas Arcade",
      thumbnail: "/imgs/canvas-arcade.png",
      alert:
        "Alert: Project deployed using Heroku so wait 10-15 seconds for site to load.",
      desc: "A site I built to host a bunch of html canvas games I made, also wrote an api and database for a highscore system",
      skills: ["html", "javascript", "css", "node", "express", "PostgreSQL"],
      filter: ["", "Cool Projects"],
      github: "https://github.com/NathanPip/Canvas_Arcade",
      live: "https://canvas-arcade.herokuapp.com/",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      thumbnail: "/imgs/portfolio-img.png",
      desc: "My personal portfolio, the site you're currently on, written in Solid JS",
      skills: ["Solid JS", "sass", "vite"],
      filter: ["Cool Projects"],
      github: "https://github.com/NathanPip/Portfolio",
      live: "#",
    },
    {
      id: "my-love",
      title: "For My Girlfriend",
      thumbnail: "/imgs/my-love.png",
      desc: "A web app I made for my girlfriend and I that hosts a few slideshows of us and allows us to send messages to eachother",
      skills: ["react", "css", "mongoDB", "Back4App", "vite"],
      filter: ["Cool Projects"],
      github: "https://github.com/NathanPip/ILoveYou",
      live: "https://youthful-ardinghelli-edd7aa.netlify.app/",
    },
    {
      id: "chris-porter",
      title: "Chris Porter Photography",
      thumbnail: "/imgs/chris-porter.png",
      desc: "A photography portfolio site",
      skills: ["html", "css", "sass", "javascript"],
      filter: ["Client Work"],
      live: "https://chrisporterphotography.netlify.app/",
    },
    {
      id: "color-picker",
      title: "Color Picker Game",
      thumbnail: "/imgs/color-picker-img.png",
      desc: "A simple game written in pure javascript where you have to pick the colored square corresponding to the rgb value you are given.",
      skills: ["javascript", "css", "html"],
      filter: [""],
      github: "https://github.com/NathanPip/color-picker-game",
      live: "https://lucid-murdock-887a65.netlify.app/",
    },
  ],
};

export default DATA;
