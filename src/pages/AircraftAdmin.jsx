import { useEffect, useState } from "react";
import {
  getAircraft,
  deleteAircraft
} from "../services/aircraftService";
import AircraftForm from "../components/admin/AircraftForm";

export default function AircraftAdmin() {
  const [aircraft, setAircraft] = useState([]);
  const [editingAircraft, setEditingAircraft] = useState(null);

  useEffect(() => {
    loadAircraft();
  }, []);

  const loadAircraft = async () => {
    const data = await getAircraft();
    setAircraft(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this aircraft?")) {
      await deleteAircraft(id);
      loadAircraft();
    }
  };

  return (
    <div>
      <h1>Manage Aircraft</h1>

      <AircraftForm
        editingAircraft={editingAircraft}
        onSaved={() => {
          setEditingAircraft(null);
          loadAircraft();
        }}
      />

      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aircraft.map(a => (
            <tr key={a.id}>
              <td>{a.model}</td>
              <td>{a.manufacturer}</td>
              <td>{a.capacity}</td>
              <td>
                <button onClick={() => setEditingAircraft(a)}>Edit</button>
                <button onClick={() => handleDelete(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}