import React from 'react';
import './Image.css';

const Image = ({ src, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={src} alt="Nature" />
    </div>
  );
};

export default Image;
