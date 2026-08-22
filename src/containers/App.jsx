import { useRef, useEffect } from "react";

import memoryGame from "../assets/pictures/memorygame.png";

import Navbar from "./Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ImageBox from "../components/ImageBox";
import Project from "../components/Project";
import SocialsCard from "../components/SocialsCard";
import Hobby from "../components/Hobby";
import About from "../components/About";

import {
  techImages,
  socialImages,
  hobbies,
  aboutSections,
} from "../constants/sectionProps";

const App = () => {
  const navbarRef = useRef(null);
  const headerRef = useRef(null);

  const options = {
    rootMargin: "-449px 0px 0px 0px",
  };

  const observer = new IntersectionObserver((entries, _) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbarRef.current.classList.add("nav-scrolled");
      } else {
        navbarRef.current.classList.remove("nav-scrolled");
      }
    });
  }, options);

  useEffect(() => {
    observer.observe(headerRef.current);
  }, []);

  return (
    <>
      <Navbar navbarRef={navbarRef} />
      <main>
        <Header headerRef={headerRef} />
        <Section id={"about"} heading={"Who Is Jody Bailey?"}>
          {aboutSections.map(({ heading, text }) => (
            <About heading={heading} text={text} key={heading} />
          ))}
        </Section>
        <Section id={"tech-skills"} heading={"Technical Skills"}>
          <div className="img-container">
            {techImages.map(({ src, alt }) => (
              <ImageBox src={src} alt={alt} key={src} />
            ))}
          </div>
        </Section>
        <Section id={"projects"} heading={"Projects"}>
          <Project
            heading={"Memory Game"}
            url={"https://jodybailey.github.io/Memory-Game/"}
            src={memoryGame}
            alt={"A picture of a memory game"}
            description={"A simple memory game made with react + redux"}
          />
        </Section>
        <Section id={"hobbies"} heading={"Hobbies"}>
          {hobbies.map(({ heading, src, alt, text }) => (
            <Hobby
              key={src}
              src={src}
              alt={alt}
              text={text}
              heading={heading}
            />
          ))}
        </Section>
        <Section id={"social-links"} heading={"Get in Touch"}>
          <div className="socials-container">
            {socialImages.map(({ src, alt, url, text, id, labelId }) => (
              <SocialsCard
                src={src}
                alt={alt}
                url={url}
                text={text}
                id={id}
                labelId={labelId}
                key={src}
              />
            ))}
          </div>
        </Section>
        <Footer />
      </main>
    </>
  );
};

export default App;
