import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import NewAudit from "./pages/NewAudit";
import Audits from "./pages/Audits";
import AuditFormulaire from "./pages/AuditFormulaire";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/audits/new"
          element={
            <ProtectedRoute>
              <Layout>
                <NewAudit />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/audits"
          element={
            <ProtectedRoute>
              <Layout>
                <Audits />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/audits/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <AuditFormulaire />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
