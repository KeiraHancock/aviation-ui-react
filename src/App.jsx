import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AircraftAdmin from "./pages/AircraftAdmin";
import FlightsAdmin from "./pages/FlightsAdmin";
import GatesAdmin from "./pages/GatesAdmin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/aircraft" element={<AircraftAdmin />} />
        <Route path="/admin/flights" element={<FlightsAdmin />} />
        <Route path="/admin/gates" element={<GatesAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}