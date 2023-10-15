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

{/* <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark p-0" data-bs-theme="dark">
<div class="container-fluid ">
    <a class="navbar-brand" href="#">
      <img src="media\icons\Studyhive.png" width="56px" style="border-radius: 30%;">
    </a>
    
    <ul class="navbar-nav justify-content-end ">
      <li class="nav-item  ">
        <a class="nav-link"><i class="fas fa-user-circle fa-2x" id="user-logo"></i></a>
      </li>
    </ul>
</div>
</nav>

<div class="over hide" id="drop">
<ul style="list-style: none;">
<li><a href="profile.html">Proflie</a></li>
<li><a href="home.html">My course</a></li>
<li><a href="index.html">sign out</a></li>
<li><a href="feed.html">feedback & report</a></li>
</ul>
</div> */}