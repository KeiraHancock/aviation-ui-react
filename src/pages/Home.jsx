import { useEffect, useState } from "react";
import { getFlightsByAirport } from "../services/flightService";
import { getAirports } from "../services/airportService";

export default function Home() {
  const [airports, setAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState("");
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    loadAirports();
  }, []);

  useEffect(() => {
    if (selectedAirport) {
      loadFlights(selectedAirport);
    }
  }, [selectedAirport]);

  const loadAirports = async () => {
    const data = await getAirports();
    setAirports(data);
    if (data.length > 0) {
      setSelectedAirport(data[0].id);
    }
  };

  const loadFlights = async (airportId) => {
    const data = await getFlightsByAirport(airportId);
    setFlights(data);
  };

  return (
    <div>
      <h1>Airport Arrivals & Departures</h1>

      <label>Select Airport:</label>
      <select
        value={selectedAirport}
        onChange={(e) => setSelectedAirport(e.target.value)}
      >
        {airports.map(a => (
          <option key={a.id} value={a.id}>
            {a.name} ({a.code})
          </option>
        ))}
      </select>

      <h2>Flights</h2>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Type</th>
            <th>Status</th>
            <th>Scheduled Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td>{f.flightNumber}</td>
              <td>{f.type}</td>
              <td>{f.status}</td>
              <td>{new Date(f.scheduledTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}