import github from "../assets/pictures/github.png";
import html from "../assets/pictures/htmlLogo.png";
import css from "../assets/pictures/cssLogo.png";
import javascript from "../assets/pictures/JSLogo.png";
import nodeJs from "../assets/pictures/nodeJS.png";
import git from "../assets/pictures/git.png";
import postgres from "../assets/pictures/postgres.png";
import reactLogo from "../assets/pictures/react.png";
import docker from "../assets/pictures/docker.png";
import rails from "../assets/pictures/rails.png";
import python from "../assets/pictures/python.png";
import email from "../assets/pictures/email.png";
import linkedIn from "../assets/pictures/linkedin.png";
import hackerrank from "../assets/pictures/hackerrank.png";
import whatsApp from "../assets/pictures/whatsapp.png";
import freeCodeCamp from "../assets/pictures/FCC.png";
import music from "../assets/pictures/music-production.jpeg";
import writing from "../assets/pictures/writing.jpg";

export const techImages = [
  { src: html, alt: "A logo of HTML 5" },
  { src: css, alt: "A logo of CSS 3" },
  { src: javascript, alt: "A logo of Javascript" },
  { src: nodeJs, alt: "A logo of Node.js" },
  { src: git, alt: "A logo of Git" },
  { src: postgres, alt: "A logo of PostgreSQL" },
  { src: reactLogo, alt: "A logo of React" },
  { src: docker, alt: "A logo of Docker" },
  { src: rails, alt: "A logo of Ruby on Rails" },
  { src: python, alt: "A logo of Python" },
];

export const socialImages = [
  {
    src: github,
    alt: "A picture of the github logo",
    url: "https://github.com/JodyBaileyy",
    text: "Github",
    id: "github-img",
  },
  {
    src: email,
    alt: "An email icon",
    url: "mailto:jjeb2020@gmail.com",
    text: "Email",
    id: "email-icon",
  },
  {
    src: linkedIn,
    alt: "A picture of the LinkedIn logo",
    url: "https://www.linkedin.com/in/jody-bailey-581381226/",
    text: "LinkedIn",
    id: "linkedin-icon",
  },
  {
    src: hackerrank,
    alt: "A picture of the Hackerrank logo",
    url: "https://www.hackerrank.com/jjeb2020",
    text: "Hackerrank",
    id: "hackerrank-icon",
  },
  {
    src: whatsApp,
    alt: "A picture of the WhatsApp Logo",
    url: "https://api.whatsapp.com/send/?phone=27614378557",
    text: "WhatsApp",
    id: "whatsapp-icon",
  },
  {
    src: freeCodeCamp,
    alt: "A picture of the FreeCodeCamp logo",
    url: "https://www.freecodecamp.org/jodybailey",
    text: "FreeCodeCamp",
    id: "freecodecamp-icon",
    labelId: "freecodecamp-label",
  },
];

export const hobbies = [
  {
    heading: "Music",
    src: music,
    alt: "A picture of a small music studio",
    text: "One of the career fields that I was previously interested in was sound engineering, but mostly it was just me thinking that music was the whole of sound engineering, and later I realized that it was much more than that. So one thing I do is make a bunch of beats from the fresh ideas that come up in my head, although I realized that it is almost impossible to replicate what is in your head. The beats are very laid-back and harmonic, just like the type of music I listen to. Even though these beats are objectively mediocre, I treasure them because, to me, they represent an idea I had that has not been mastered yet.",
  },
  {
    heading: "Writing",
    src: writing,
    alt: "A picture of writing in a book",
    text: "Writing has become one of the hobbies I never would have thought I would do, but here I am making characters and plots that I find interesting. I only got into it very recently, so I am a complete amateur, but I hope that as time progresses, I will gain enough confidence to show someone one of my stories.",
  },
];

export const aboutSections = [
  {
    heading: "Brief Intro",
    text: "I am a self-motivated, tenacious, and free-spirited 25-year-old dedicated to managing and creating beautiful, interactive, and dynamic websites that engage users. I am currently an intermediate engineer at 2U, an online education company.",
  },
  {
    heading: "My Journey",
    text: "My journey to becoming a coder started in February 2021, when I wasn't sure what I wanted to do with my life and came across a radio ad about an academy called WeThinkCode offering a free course with no prerequisites! So, me, not knowing what career field I wanted to go in, had every reason to go and try this course and see how it goes.",
  },
  {
    heading: "",
    text: "While I didn't get into the academy, I did discover that this would be a career path that I would 100% be content with pursuing in the future, as it involved an aspect that I love to do, which is problem solving. Having something that I can call my own and can be proud of creating is what I strive for, as it serves as a kind of validation for yourself that you are the mastermind behind that thing.",
  },
  {
    heading: "What Next?",
    text: "So naturally, after this discovery, I enrolled in another coding career with Umuzi, got accepted, finished my studies, got a position as an intern at 2U, got retained as a junior engineer, and then got promoted to an intermediate engineer. And that's how I found myself in the position I'm in right now. Although I have a long journey ahead, I'm looking forward to seeing just where it will lead me in the future.",
  },
];
