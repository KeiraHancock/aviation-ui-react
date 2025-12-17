import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AircraftAdmin from "./pages/AircraftAdmin";
import FlightsAdmin from "./pages/FlightsAdmin";
import GatesAdmin from "./pages/GatesAdmin";
import AirlineAdmin from "./pages/AirlineAdmin"; // new page

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="aircraft" element={<AircraftAdmin />} />
          <Route path="airlines" element={<AirlineAdmin />} />
          <Route path="flights" element={<FlightsAdmin />} />
          <Route path="gates" element={<GatesAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
