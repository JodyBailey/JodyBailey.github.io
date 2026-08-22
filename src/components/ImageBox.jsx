const ImageBox = ({ src, alt }) => {
  return (
    <div className="img-box">
      <img src={src} alt={alt} className="tech-img" />
    </div>
  );
};

export default ImageBox;
