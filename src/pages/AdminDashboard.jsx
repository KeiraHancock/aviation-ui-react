import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <ul>
        <li><Link to="/admin/flights">Manage Flights</Link></li>
        <li><Link to="/admin/aircraft">Manage Aircraft</Link></li>
        <li><Link to="/admin/airlines">Manage Airlines</Link></li>
        <li><Link to="/admin/gates">Manage Gates</Link></li>
      </ul>
    </div>
  );
}