import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import Dashboard from "./pages/Dashboard";
import DashboardEmp from "./pages/DashboardEmp";
import RequestForm from "./pages/RequestForm";
import AuthPage from "./pages/AuthPage";
import StockManagement from "./pages/StockManagement";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Layout Routes */}
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="stock" element={<StockManagement />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>

        {/* Employee Layout Routes */}
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<DashboardEmp />} />
          <Route path="dashboard" element={<DashboardEmp />} />
          <Route path="request" element={<RequestForm />} />
        </Route>

        {/* Auth page */}
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
