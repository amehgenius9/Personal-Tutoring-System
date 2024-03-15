import React from "react";

const ImageCard = ({ imageUrl, className, alt }) => {
  return (
    <div className="imageCard">
      <img src={imageUrl} className={`image ${className}`} alt={alt} />
    </div>
  );
};

export default ImageCard;
