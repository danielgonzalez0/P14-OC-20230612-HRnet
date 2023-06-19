import React, { useState } from 'react';

const Modal = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <span
        className="fa-regular fa-circle-question"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></span>
      {isHovering && (
        <ul className="modal-container">
          <li> - start with a capital letter</li>
          <li> - minimum one character</li>
          <li> - no accent</li>
          <li> - no number</li>
          <li> - no special character</li>
        </ul>
      )}
    </>
  );
};

export default Modal;
