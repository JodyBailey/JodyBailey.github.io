const Project = ({ heading, url, src, alt, description }) => {
  return (
    <div className="project-img-container">
      <h3 className="project-sub-head">{heading}</h3>
      <a href={url} target="_blank">
        <div className="rounded-img-container">
          <img className="project-img" src={src} alt={alt} />
        </div>
      </a>
      <p className="project-desc">{description}</p>
    </div>
  );
};

export default Project;
