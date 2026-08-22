const Hobby = ({ heading, src, alt, text }) => {
  return (
    <>
      <h3 className="hby-subheads">{heading}</h3>
      <div className="hby-img-container">
        <div className="rounded-img">
          <img className="hby-img" src={src} alt={alt} />
        </div>
        <div className="connect-line"></div>
        <div className="gradient-crcl"></div>
      </div>
      <p>{text}</p>
    </>
  );
};

export default Hobby;
