import { useEffect, useMemo, useState } from "react";
import "../App.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function Home() {
  const [airport, setAirport] = useState("YHZ");
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");

  const url = useMemo(
    () => `${API}/api/flights/airport/${airport}`,
    [airport]
  );

  useEffect(() => {
    setError("");
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then(setFlights)
      .catch(() =>
        setError("Could not load flights. Is the API running on :8080?")
      );
  }, [url]);

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: 16,
        fontFamily: "system-ui",
      }}
    >
      <h1>Arrivals & Departures</h1>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <label>
          Airport:&nbsp;
          <select
            value={airport}
            onChange={(e) => setAirport(e.target.value)}
          >
            <option value="YHZ">YHZ - Halifax</option>
            <option value="YYT">YYT - St. John's</option>
          </select>
        </label>

        <span style={{ opacity: 0.7 }}>
          API: <code>{API}</code>
        </span>
      </div>

      {error && (
        <div
          style={{
            padding: 12,
            background: "#ffe3e3",
            borderRadius: 8,
          }}
        >
          {error}
        </div>
      )}

      <table width="100%" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
            <th>Time</th>
            <th>Type</th>
            <th>Flight</th>
            <th>Airline</th>
            <th>Gate</th>
            <th>From/To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <td>{new Date(f.scheduledTime).toLocaleString()}</td>
              <td>{f.type}</td>
              <td>{f.flightNumber}</td>
              <td>{f.airline?.name}</td>
              <td>{f.gate?.gateNumber}</td>
              <td>{f.originOrDestination}</td>
              <td>{f.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: 18, opacity: 0.7 }}>
        Next steps: add Admin CRUD screens for Flights/Airports/Airlines/Gates +
        forms + validation.
      </p>
    </div>
  );
}