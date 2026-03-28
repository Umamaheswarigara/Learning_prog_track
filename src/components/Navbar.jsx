import "../styles/navbar.css";
import { UserRound , Search } from "lucide-react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">SOLO LEVELING</h2>

        <div className="nav-links">
          <span className="nav-item" onClick={() => setPage("dashboard")}>
            Dashboard
          </span>

          <span className="nav-item" onClick={() => setPage("modules")}>
            Modules
          </span>

          <span className="nav-item" onClick={() => setPage("calendar")}> 
            Calendar
          </span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search modules..." />
        </div>

        <div className="profile-circle">
          <UserRound size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;