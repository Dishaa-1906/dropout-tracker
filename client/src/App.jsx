import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
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

        <Dashboard />

      </div>

    </div>
  );
}

export default App;