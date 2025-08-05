import { Outlet, Link } from "react-router-dom";
import "./AdminLayout.css";
import { FaCog } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="logo">LEAR NET</div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/stock">Stock</Link></li>
            <li><Link to="/request">Requests</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
            <div className="bottom-settings">
                      <Link to="/settings">
                        <FaCog /> Settings
                      </Link>
                    </div>
          </ul>
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
