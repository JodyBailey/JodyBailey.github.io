const Header = ({ headerRef }) => {
  return (
    <header ref={headerRef}>
      <div className="site-header">
        <div className="header-text">
          <h1>Full-Stack Software Engineer</h1>
        </div>
        <div id="download-cv-container">
          <a
            href="./assets/documents/Jody Bailey CV.pdf"
            id="download-cv-button"
            download="jody-bailey-cv"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
