import React from "react";
import ClickAwayListener from "react-click-away-listener";
import "./modal.css";

const Modal = ({ open, children, onClose, className }) => {
  if (!open) return <></>;
  return (
    <div className="modal-container">
      <ClickAwayListener onClickAway={onClose}>
        <div className={"modal-content" + className}>{children}</div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
