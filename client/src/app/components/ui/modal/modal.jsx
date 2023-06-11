import React from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {
  return createPortal(
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
