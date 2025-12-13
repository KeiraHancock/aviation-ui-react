import { useEffect, useState } from "react";
import { getFlights, deleteFlight } from "../services/flightService";
import FlightForm from "../components/admin/FlightForm";

export default function FlightsAdmin() {
  const [flights, setFlights] = useState([]);
  const [editingFlight, setEditingFlight] = useState(null);

  useEffect(() => {
    loadFlights();
  }, []);

  const loadFlights = async () => {
    const data = await getFlights();
    setFlights(data);
  };

  const handleDelete = async (id) => {
    await deleteFlight(id);
    loadFlights();
  };

  return (
    <div>
      <h2>Manage Flights</h2>

      <FlightForm
        editingFlight={editingFlight}
        onSaved={loadFlights}
      />

      <table>
        <thead>
          <tr>
            <th>Flight #</th>
            <th>Status</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td>{f.flightNumber}</td>
              <td>{f.status}</td>
              <td>{f.type}</td>
              <td>
                <button onClick={() => setEditingFlight(f)}>Edit</button>
                <button onClick={() => handleDelete(f.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}