import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose, onPrev, onNext }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="modal-navigation">
          <span className="nav-arrow" onClick={onPrev}>&lt;</span>
          <img src={image} alt="Nature" className="modal-image" />
          <span className="nav-arrow" onClick={onNext}>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
