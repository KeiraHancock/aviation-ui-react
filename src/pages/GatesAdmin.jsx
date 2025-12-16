import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function GatesAdmin() {
  const [gates, setGates] = useState([]);
  const [gateNumber, setGateNumber] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API}/api/gates`)
      .then((r) => {
        if (!r.ok) throw new Error("API not ready");
        return r.json();
      })
      .then(setGates)
      .catch(() =>
        setError("Gates API not available yet (backend in progress)")
      );
  }, []);

  const addGate = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API}/api/gates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gateNumber }),
      });

      if (!res.ok) throw new Error();

      const newGate = await res.json();
      setGates([...gates, newGate]);
      setGateNumber("");
    } catch {
      setError("Unable to add gate (API not ready)");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Manage Gates</h1>

      {error && (
        <p style={{ color: "darkred", background: "#ffe3e3", padding: 10 }}>
          {error}
        </p>
      )}

      <form onSubmit={addGate}>
        <input
          value={gateNumber}
          onChange={(e) => setGateNumber(e.target.value)}
          placeholder="Gate Number"
          required
        />
        <button type="submit">Add Gate</button>
      </form>

      <ul>
        {gates.map((g) => (
          <li key={g.id}>Gate {g.gateNumber}</li>
        ))}
      </ul>
    </div>
  );
}