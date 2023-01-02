import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Admin from "./pages/admin/AdminDashboard";
import Login from "./pages/auth/login";
import Transporter from "./pages/transporter/TransporterDashboard";
import Client from "./pages/client/ClientDashboard";
import PreRegister from "./pages/auth/preregister";
import ResetPassword from "./pages/auth/resetpassword";
import RegisterUser from "./pages/auth/registeruser";
import VerifyEmail from "./pages/auth/verifyemail";
import UpdatePassword from "./pages/auth/updatepassword";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<h1>Home</h1>} />
        <Route path="/auth/">
          <Route path="login" element={<Login />} />
          <Route path="pre-register" element={<PreRegister />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="verifyemail" element={<VerifyEmail />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="updatepassword" element={<UpdatePassword />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="admin" element={<Admin />} />
          <Route path="client" element={<Client />} />
          <Route path="transporter" element={<Transporter />} />
        </Route>
        <Route path="*" element={<h1>404: Not found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
