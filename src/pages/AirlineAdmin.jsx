import { useEffect, useState } from "react";
import {
  getAirlines,
  createAirline,
  updateAirline,
  deleteAirline
} from "../services/airlineService";

export default function AirlineAdmin() {
  const [airlines, setAirlines] = useState([]);
  const [editingAirline, setEditingAirline] = useState(null);
  const [formData, setFormData] = useState({ code: "", name: "" });

  useEffect(() => {
    loadAirlines();
  }, []);

  const loadAirlines = async () => {
    const data = await getAirlines();
    setAirlines(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingAirline) {
      await updateAirline(editingAirline.id, formData);
    } else {
      await createAirline(formData);
    }
    setFormData({ code: "", name: "" });
    setEditingAirline(null);
    loadAirlines();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this airline?")) {
      await deleteAirline(id);
      loadAirlines();
    }
  };

  const handleEdit = (airline) => {
    setEditingAirline(airline);
    setFormData({ code: airline.code, name: airline.name });
  };

  return (
    <div>
      <h1>Manage Airlines</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Code"
          value={formData.code}
          onChange={(e) => setFormData({ ...formData, code: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <button type="submit">
          {editingAirline ? "Update Airline" : "Add Airline"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {airlines.map((a) => (
            <tr key={a.id}>
              <td>{a.code}</td>
              <td>{a.name}</td>
              <td>
                <button onClick={() => handleEdit(a)}>Edit</button>
                <button onClick={() => handleDelete(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
