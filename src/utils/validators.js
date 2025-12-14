export function validateAircraft(aircraft) {
  const errors = {};

  if (!aircraft.model || aircraft.model.trim() === "") {
    errors.model = "Model is required";
  }

  if (!aircraft.manufacturer || aircraft.manufacturer.trim() === "") {
    errors.manufacturer = "Manufacturer is required";
  }

  if (!aircraft.capacity || aircraft.capacity <= 0) {
    errors.capacity = "Capacity must be greater than 0";
  }

  return errors;
}

export function validateFlight(flight) {
  const errors = {};

  if (!flight.flightNumber || flight.flightNumber.trim() === "") {
    errors.flightNumber = "Flight number is required";
  }

  if (!flight.type) {
    errors.type = "Flight type is required";
  }

  if (!flight.airline) {
    errors.airline = "Airline is required";
  }

  if (!flight.aircraftId) {
    errors.aircraftId = "Aircraft is required";
  }

  if (!flight.time) {
    errors.time = "Scheduled time is required";
  }

  return errors;
}