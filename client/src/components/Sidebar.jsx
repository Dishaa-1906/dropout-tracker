import {
  LayoutDashboard,
  Users,
  UserPlus,
  AlertTriangle,
  ClipboardList,
  BarChart3
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logo-icon">DT</div>

        <div>
          <h2>Dropout</h2>
          <span>Tracker</span>
        </div>
      </div>

      <nav>

        <Link to="/" className="nav-item">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>

        <Link to="/students" className="nav-item">
          <Users size={20} />
          <span>Students</span>
        </Link>

        <Link to="/add-student" className="nav-item">
          <UserPlus size={20} />
          <span>Add Student</span>
        </Link>

        <div className="nav-item">
          <AlertTriangle size={20} />
          <span>Risk Assessment</span>
        </div>

        <div className="nav-item">
          <ClipboardList size={20} />
          <span>Interventions</span>
        </div>

        <div className="nav-item">
          <BarChart3 size={20} />
          <span>Reports</span>
        </div>

      </nav>

    </aside>
  );
}

export default Sidebar;