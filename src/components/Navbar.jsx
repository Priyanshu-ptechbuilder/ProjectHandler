import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



import '../styles/Student/Navbar.css'; 

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">AProject0</Link>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search anything..." className="search-bar" />
        <FaBell className="bell-icon" />
        <div className="profile" onClick={() => setShowMenu(!showMenu)}>
          Aksha Jaywal ▾
          {showMenu && (
            
            <div className="submenu">
              <p>Team Members:</p>
              <ul>
                <li>Yash Goel</li>
                <li>Aksha Jaywal</li>
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


export default Navbar;
