import { useEffect, useState } from "react";
import { createFlight, updateFlight } from "../../services/flightService";
import { validateFlight } from "../../utils/validators";

export default function FlightForm({ editingFlight, onSaved }) {
  const [flight, setFlight] = useState({
    flightNumber: "",
    status: "",
    type: "",
    scheduledTime: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingFlight) {
      setFlight(editingFlight);
    }
  }, [editingFlight]);

  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFlight(flight);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (flight.id) {
      await updateFlight(flight.id, flight);
    } else {
      await createFlight(flight);
    }

    setFlight({ flightNumber: "", status: "", type: "", scheduledTime: "" });
    setErrors({});
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{flight.id ? "Edit Flight" : "Add Flight"}</h3>

      <input
        name="flightNumber"
        placeholder="Flight Number"
        value={flight.flightNumber}
        onChange={handleChange}
      />
      {errors.flightNumber && <p>{errors.flightNumber}</p>}

      <select name="status" value={flight.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="ON_TIME">On Time</option>
        <option value="DELAYED">Delayed</option>
        <option value="CANCELLED">Cancelled</option>
      </select>
      {errors.status && <p>{errors.status}</p>}

      <select name="type" value={flight.type} onChange={handleChange}>
        <option value="">Arrival / Departure</option>
        <option value="ARRIVAL">Arrival</option>
        <option value="DEPARTURE">Departure</option>
      </select>
      {errors.type && <p>{errors.type}</p>}

      <input
        type="datetime-local"
        name="scheduledTime"
        value={flight.scheduledTime}
        onChange={handleChange}
      />
      {errors.scheduledTime && <p>{errors.scheduledTime}</p>}

      <button type="submit">Save</button>
    </form>
  );
}