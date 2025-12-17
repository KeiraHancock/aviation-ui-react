const API_URL = "http://3.90.191.88:8080/api/flights";

// Get all flights (admin or general)
export const getFlights = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch flights");
  }
  return res.json();
};

// Get flights for a specific airport (home page)
export const getFlightsByAirport = async (airportId) => {
  const res = await fetch(`${API_URL}/airport/${airportId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch flights for airport");
  }
  return res.json();
};

// Create a new flight (admin)
export const createFlight = async (flight) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(flight)
  });

  if (!res.ok) {
    throw new Error("Failed to create flight");
  }
};

 // Update an existing flight (admin)
export const updateFlight = async (id, flight) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(flight)
  });

  if (!res.ok) {
    throw new Error("Failed to update flight");
  }
};

 // Delete a flight (admin)
export const deleteFlight = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Failed to delete flight");
  }
};