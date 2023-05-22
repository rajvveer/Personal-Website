import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  jobit,
  carrent,
  tripguide,
  
} from "../assets";
import viren from "../assets/viren.avif"
import lalit from "../assets/blog-6.jpg"
import chat from "../assets/tech/blog-7.jpg"
import modern from "../assets/tech/blog-5.jpg"
import youtube from "../assets/tech/blog-4.jpg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
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
    name: "Ecommerce Frontend",
    description:
      "It is a frontend part of an ecommerce website created using html,css and JS",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: viren,
    source_code_link: "https://github.com/",
    project_link: "https://jade-caramel-14ef6e.netlify.app"
  },
  {
    name: "Virtual Assistant",
    description:
      "It is an Virtual Assistant completely made by javascript.It will do whatever you Command.It only works in Chrome.Try it by asking time or open instagram",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lalit,
    source_code_link: "https://github.com/",
    project_link: "https://capable-gumdrop-ac172e.netlify.app/"
  },
  {
    name: "LALIT:AI",
    description:
      "Its is an Ai chatbot made by using openai's Technology just like chat gpt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/",
    project_link: "https://chat-lalit.vercel.app/",
  },
  {
    name: "Modern Website with animations",
    description:
      "it is an modern looking website with breathtaking animations.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: modern,
    source_code_link: "https://github.com/",
    project_link: "https://genuine-khapse-63b171.netlify.app",
  },
  {
    name: " YouTube Clone React application",
    description:
      "It is an Youtube clone React application made by using Rapid api's api keys.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/",
    project_link: "https://mytubbee.netlify.app",
  },
  {
    name: "IMDB-movies clone application",
    description:
      "A Full-Stack IMDB movies clone application made by using Reactjs",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    project_link: "https://imdb-cloneee.netlify.app",
  },
];

export { services, technologies, testimonials, projects };
