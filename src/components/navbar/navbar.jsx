import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import Modal from "../modal/modal";
import "./navbar.css";
import Button from "../button/button";
import Input from "../input/input";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const popModal = () => {
    console.log(modal);
    setModal(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <ul className="nav-items">
            <li className="nav-link">
              <Link className="nav-innerlink">I didn't get my tickets</Link>
            </li>

            <li className="nav-link">
              <Button
              type="button"
              buttonSize="btn_small"
              buttonStyle="btn_primary_solid" onClick={popModal}>CREATE YOUR OWN EVENT</Button>
            </li>
          </ul>

          <Modal open={modal} onClose={() => setModal(false)}>
            <form>
              <div>
                <div className="modal-form-header">CREATE YOUR OWN EVENT</div>
                <div className="modal-form-content">
                  <Input label="Event Name" />
                  <Input label="Event Address" />
                  <Button>CREATE EVENT</Button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
