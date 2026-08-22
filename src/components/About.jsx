const About = ({ heading, text }) => {
  return (
    <>
      {heading && <h3>{heading}</h3>}
      <p>{text}</p>
    </>
  );
};

export default About;
