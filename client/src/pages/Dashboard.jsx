function Dashboard() {
        return (
          <main className="dashboard">
      
            <div className="page-header">
              <div>
                <h1>Dashboard</h1>
                <p>Monitor student dropout risk and take early action.</p>
              </div>
      
              <button className="add-button">
                + Add Student
              </button>
            </div>
      
            <div className="stats-grid">
      
              <div className="stat-card">
                <p>Total Students</p>
                <h2>250</h2>
                <span>Currently monitored</span>
              </div>
      
              <div className="stat-card high">
                <p>High Risk</p>
                <h2>18</h2>
                <span>Need immediate attention</span>
              </div>
      
              <div className="stat-card medium">
                <p>Medium Risk</p>
                <h2>42</h2>
                <span>Need monitoring</span>
              </div>
      
              <div className="stat-card low">
                <p>Low Risk</p>
                <h2>190</h2>
                <span>Currently stable</span>
              </div>
      
            </div>
      
            <div className="content-grid">
      
              <div className="chart-card">
                <h2>Risk Distribution</h2>
      
                <div className="chart-placeholder">
                  <div className="bar low-bar"></div>
                  <div className="bar medium-bar"></div>
                  <div className="bar high-bar"></div>
                </div>
      
                <div className="legend">
                  <span>● Low</span>
                  <span>● Medium</span>
                  <span>● High</span>
                </div>
              </div>
      
              <div className="info-card">
                <h2>Today's Overview</h2>
      
                <p>Attendance alerts</p>
                <strong>12</strong>
      
                <p>Students requiring follow-up</p>
                <strong>8</strong>
              </div>
      
            </div>
      
            <div className="students-card">
      
              <div className="section-header">
                <h2>High Risk Students</h2>
                <button>View All</button>
              </div>
      
              <table>
      
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Class</th>
                    <th>Attendance</th>
                    <th>Marks</th>
                    <th>Risk</th>
                  </tr>
                </thead>
      
                <tbody>
      
                  <tr>
                    <td>Rahul Patil</td>
                    <td>8</td>
                    <td>68%</td>
                    <td>42%</td>
                    <td>
                      <span className="risk high-risk">HIGH</span>
                    </td>
                  </tr>
      
                  <tr>
                    <td>Sneha Sharma</td>
                    <td>9</td>
                    <td>71%</td>
                    <td>48%</td>
                    <td>
                      <span className="risk high-risk">HIGH</span>
                    </td>
                  </tr>
      
                  <tr>
                    <td>Amit More</td>
                    <td>7</td>
                    <td>73%</td>
                    <td>51%</td>
                    <td>
                      <span className="risk high-risk">HIGH</span>
                    </td>
                  </tr>
      
                </tbody>
      
              </table>
      
            </div>
      
          </main>
        );
      }
      
      export default Dashboard;