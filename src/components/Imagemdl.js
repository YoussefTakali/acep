import React  from 'react';

function ImageModal({ imageUrl, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Large Image" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ImageModal;
