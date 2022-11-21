import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Admin from "./pages/Admin/AdminDashboard";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Transporter from "./pages/Transporter/TransporterDashboard";
import Client from "./pages/Client/ClientDashboard";
import PreRegister from "./pages/Auth/PreRegister/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<h1>Home</h1>} />
        <Route path="/auth/">
          <Route path="login" element={<Login />} />
          <Route path="pre-register" element={<PreRegister />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/client" element={<Client />} />
        <Route path="/transporter" element={<Transporter />} />
        <Route path="*" element={<h1>404: Not found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
