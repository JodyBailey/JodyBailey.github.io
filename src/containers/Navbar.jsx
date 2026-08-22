import { useRef } from "react";

const Navbar = ({ navbarRef }) => {
  const navBarLinksRef = useRef(null);
  const closeNavbarRef = useRef(null);

  const handleToggleClick = () => {
    navBarLinksRef.current.classList.add("clicked");
    closeNavbarRef.current.style.display = "block";
  };

  const handleCloseNavClick = () => {
    navBarLinksRef.current.classList.remove("clicked");
    closeNavbarRef.current.style.display = "none";
  };

  return (
    <nav className="nav-bar" ref={navbarRef}>
      <div className="brand-name">J B</div>
      <a href="#/" className="toggle-menu" onClick={handleToggleClick}>
        <span className="ham-menu-bar"></span>
        <span className="ham-menu-bar"></span>
        <span className="ham-menu-bar"></span>
      </a>
      <div className="nav-bar-links" ref={navBarLinksRef}>
        <div
          className="close-navbar-container"
          ref={closeNavbarRef}
          onClick={handleCloseNavClick}
        >
          <div className="line-container">
            <span className="x-line x-line-1"></span>
            <span className="x-line x-line-2"></span>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#tech-skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#hobbies">Hobbies</a>
          </li>
          <li>
            <a href="#social-links">Socials</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
