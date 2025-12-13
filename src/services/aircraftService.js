const API_URL = "http://localhost:8080/api/aircraft";

export const getAircraft = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createAircraft = async (aircraft) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(aircraft)
  });
};

export const updateAircraft = async (id, aircraft) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(aircraft)
  });
};

export const deleteAircraft = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};