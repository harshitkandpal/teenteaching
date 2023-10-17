import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaHome, FaSignInAlt, FaRegBuilding, FaComment, FaPlayCircle, FaBars } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  const [display, setDisplay] = useState('over hide');

  const toggleDisplay = () => {
    setDisplay(display === 'over hide' ? 'over' : 'over hide');
  };

  return (
    <div className="navbar navbar-expand-lg border-bottom px-1">
      <span className="navbar-brand">
        <Link to="/" className="no-underline">
          <img src="./logo.jpg" width={48} height={48} alt="Logo" />
        </Link>
      </span>
      <div onClick={toggleDisplay}>
        <FaBars size={24} />
      </div>
      <div className={display} id="drop">
        <ul className="navbar__links ">
          <li>
            <Link to="/Home" className="no-underline tooltipH">
              <FaHome size={24} />
            </Link>
          </li>
          <li>
            <Link to="/About" className="no-underline tooltipA">
              <FaRegBuilding size={24} />
            </Link>
          </li>
          <li>
            <Link to="/" className="no-underline tooltipL">
              <FaSignInAlt size={24} />
            </Link>
          </li>
          <li>
            <Link to="/Chat" className="no-underline tooltipC">
              <FaComment size={24} />
            </Link>
          </li>
          <li>
            <Link to="/Live" className="no-underline tooltipV">
              <FaPlayCircle size={24} />
            </Link>
          </li>
          <li>
            <Link to="/ProfileUpdate" className="no-underline tooltipP">
              <FaUserTie size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

