import { FaBell } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="topbar">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back 👋</p>
      </div>

      <div className="topbar-right">
        <div className="location">
          <MdLocationOn />
          <span>New Delhi</span>
        </div>

        <button className="notify">
          <FaBell />
        </button>
      </div>
    </header>
  );
}