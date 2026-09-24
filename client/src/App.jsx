import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <div className="main-content">

          <header className="topbar">

            <div>
              <h3>Student Early Warning System</h3>
            </div>

            <div className="profile">
              <span>🔔</span>

              <div>
                <strong>Admin</strong>
                <small>School Administrator</small>
              </div>
            </div>

          </header>

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/students"
              element={<Students />}
            />

            <Route
              path="/add-student"
              element={<AddStudent />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;