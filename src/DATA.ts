export interface skill {
  id: string;
  title: string;
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
  "Javascript",
  "SolidJS",
  "bug",
  "ecommerce",
  "ui",
  "user",
  "styles"
];

const DATA: PortfolioData = {
  SKILLS_DATA: [
    {
      id: "html",
      title: "HTML",
      desc: "Knowledge in accessibility and SEO requirements, WCAG principles, and writing clean, well-organized, semantic elements",
      color: "#f3722c"
    },
    {
      id: "css",
      title: "CSS",
      desc: "a deep understanding of the box-model, adept proficiency in using flex-box and grid, and the ability to turn any design into reality",
      color: "#43aa8b"
    },
    {
      id: "js",
      title: "Javascript",
      desc: "Deep knowledge of es6 syntax, Ajax and async processing, the event loop and general Object-oriented, functional, and procedural programming concepts",
      color: "#f9c74f"
    },
    {
      id: "typescript",
      title: "Typescript",
      desc: "Understanding of type defintions, interfaces, and generics",
      color: "#3178C6"
    },
    {
      id: "react",
      title: "React",
      desc: "Knowledge in everything from routing, to custom hooks, to state management, to server side rendering",
      color: "#61DBFB"
    },
    {
      id: "solid",
      title: "SolidJS",
      desc: "Deep understanding of reactivity in solidjs with experience porting multiple react projects into SolidJS",
      color: "#446b9e"
    },
    {
      id: "webgl",
      title: "Three.js",
      desc: "Understanding of 3D rendering and animating in Three.js and WebGL",
      color: "#049EF4"
    },
    {
      id: "node",
      title: "Node",
      desc: "Knowledge of the node package manager as well as server-side rendering, view-engines, routing, and building RESTful apis",
      color: "#34ec5c"
    },
    {
      id: "python",
      title: "Python",
      desc: "Ability to build a multitude of scripts for web-scraping, ETL, and other data and tooling related applications",
      color: "#f94144"
    },
    {
      id: "git",
      title: "Git",
      desc: "Understanding of version control and git workflows as well as pushing and pulling from remote repositories on github",
      color: "#f94144"
    },
  ],

  PROJECTS_DATA: [
    {
      id: "cards-against-humans",
      title: "Cards Against Humans",
      thumbnail: "/imgs/cards-against-humans.png",
      desc: "A multiplayer cards against humanity clone built with NextJS and Websockets through Liveblocks.",
      skills: [
        "react",
        "next.js",
        "typescript",
        "trpc",
        "prisma",
        "tailwind",
        "liveblocks",
      ],
      filter: ["Featured", "Cool Projects"],
      github: "https://github.com/NathanPip/cards-against-humans",
      live: "https://cards-against-humans.vercel.app/",
    },
    {
      id: "steam-higher-lower",
      title: "Steam Higher Lower Game",
      thumbnail: "/imgs/steam-higher-lower.png",
      desc: "The classic higher lower game but instead of search counts it uses the number of players on steam for each game.",
      skills: [
        "react",
        "next.js",
        "typescript",
        "trpc",
        "prisma",
        "tailwind",
      ],
      filter: ["Featured", "Cool Projects"],
      github: "https://github.com/NathanPip/steam-higher-lower",
      live: "https://steam-higher-lower.vercel.app/",
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
      filter: ["Cool Projects", "Featured"],
      github: "https://github.com/NathanPip/game-deals-site",
      live: "https://players-plug.herokuapp.com/",
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
      filter: ["Featured", "Cool Projects"],
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
