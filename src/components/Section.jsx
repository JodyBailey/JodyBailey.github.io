const Section = ({ id, heading, children }) => {
  return (
    <section id={id}>
      <div className="section-container">
        <h2>{heading}</h2>
        <hr className="line-break" />
        {children}
      </div>
    </section>
  );
};

export default Section;
