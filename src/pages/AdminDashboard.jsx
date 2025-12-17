import { Outlet, Link, useLocation } from "react-router-dom";

export default function AdminDashboard() {
  const location = useLocation();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/aircraft">Manage Aircraft</Link></li>
          <li><Link to="/admin/airlines">Manage Airlines</Link></li>
          <li><Link to="/admin/flights">Manage Flights</Link></li>
          <li><Link to="/admin/gates">Manage Gates</Link></li>
        </ul>
      </nav>

      {/* Render child route content */}
      <Outlet />
    </div>
  );
}
