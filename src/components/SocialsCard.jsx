const SocialsCard = ({ url, src, alt, text, id, labelId }) => {
  return (
    <div className="socials-card">
      <a className="socials-link" href={url} target="_blank">
        <img src={src} alt={alt} id={id} />

        <label
          htmlFor={id}
          className="social-label"
          id={labelId ? labelId : ""}
        >
          {text}
        </label>
      </a>
    </div>
  );
};

export default SocialsCard;
