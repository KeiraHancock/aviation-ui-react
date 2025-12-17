const API_URL = "http://localhost:8080/api/airlines";

export const getAirlines = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createAirline = async (airline) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(airline)
  });
};

export const updateAirline = async (id, airline) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(airline)
  });
};

export const deleteAirline = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};
