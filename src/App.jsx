import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Admin from "./pages/admin/AdminDashboard";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import Transporter from "./pages/transporter/TransporterDashboard";
import Client from "./pages/client/ClientDashboard";
import PreRegister from "./pages/auth/preregister/Index";
import ResetPassword from "./pages/auth/reset";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<h1>Home</h1>} />
        <Route path="/auth/">
          <Route path="login" element={<Login />} />
          <Route path="pre-register" element={<PreRegister />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPassword />} />
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
