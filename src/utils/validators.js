export function validateAircraft(aircraft) {
  const errors = {};

  if (!aircraft.model)
    errors.model = "Model is required";

  if (!aircraft.manufacturer)
    errors.manufacturer = "Manufacturer is required";

  if (!aircraft.capacity || aircraft.capacity <= 0)
    errors.capacity = "Capacity must be greater than 0";

  return errors;
}