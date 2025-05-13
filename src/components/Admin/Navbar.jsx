import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import '../../styles/Admin/Navbar.css';

function NavbarAdmin() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
    setShowMenu(false);
  };

  return (
    <nav className="navbar-admin">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">Project Handler Admin</Link>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search anything..." className="search-bar" />
        <FaBell className="bell-icon" />
        <div className="profile" onClick={() => setShowMenu(!showMenu)}>
          Admin ▾
          {showMenu && (
            <div className="submenu">
              <p>Quick Links:</p>
              <ul>
                <li><Link to="/reviews">Review Projects</Link></li>
                <li><Link to="/users">Assign Mentors</Link></li>
                <li><Link to="/reports">Download Reports</Link></li>
              </ul>
              <hr />
              <button onClick={handleSettingsClick}>Settings</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
