import { useEffect, useState } from "react";
import {
  createAircraft,
  updateAircraft
} from "../../services/aircraftService";
import { validateAircraft } from "../../utils/validators";

export default function AircraftForm({ editingAircraft, onSaved }) {
  const [aircraft, setAircraft] = useState({
    model: "",
    manufacturer: "",
    capacity: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingAircraft) {
      setAircraft({
        id: editingAircraft.id,
        model: editingAircraft.model,
        manufacturer: editingAircraft.manufacturer,
        capacity: editingAircraft.capacity
      });
    }
  }, [editingAircraft]);

  const handleChange = (e) => {
    setAircraft({
      ...aircraft,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateAircraft(aircraft);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (aircraft.id) {
      await updateAircraft(aircraft.id, aircraft);
    } else {
      await createAircraft(aircraft);
    }

    setAircraft({
      model: "",
      manufacturer: "",
      capacity: ""
    });

    setErrors({});
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{aircraft.id ? "Edit Aircraft" : "Add Aircraft"}</h3>

      <div>
        <label>Model</label>
        <input
          type="text"
          name="model"
          value={aircraft.model}
          onChange={handleChange}
        />
        {errors.model && <p className="error">{errors.model}</p>}
      </div>

      <div>
        <label>Manufacturer</label>
        <input
          type="text"
          name="manufacturer"
          value={aircraft.manufacturer}
          onChange={handleChange}
        />
        {errors.manufacturer && (
          <p className="error">{errors.manufacturer}</p>
        )}
      </div>

      <div>
        <label>Capacity</label>
        <input
          type="number"
          name="capacity"
          value={aircraft.capacity}
          onChange={handleChange}
        />
        {errors.capacity && <p className="error">{errors.capacity}</p>}
      </div>

      <button type="submit">
        {aircraft.id ? "Update Aircraft" : "Add Aircraft"}
      </button>
    </form>
  );
}