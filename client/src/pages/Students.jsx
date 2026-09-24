import { useState } from "react";

function Students() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "ST001",
      name: "Rahul Patil",
      className: "8",
      attendance: 68,
      marks: 42,
      risk: "High",
    },
    {
      id: "ST002",
      name: "Sneha Sharma",
      className: "9",
      attendance: 71,
      marks: 48,
      risk: "High",
    },
    {
      id: "ST003",
      name: "Amit More",
      className: "7",
      attendance: 73,
      marks: 51,
      risk: "Medium",
    },
    {
      id: "ST004",
      name: "Priya Patil",
      className: "8",
      attendance: 91,
      marks: 78,
      risk: "Low",
    },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="dashboard">

      <div className="page-header">
        <div>
          <h1>Students</h1>
          <p>View and manage student information.</p>
        </div>

        <button className="add-button">
          + Add Student
        </button>
      </div>

      <div className="students-card">

        <div className="student-toolbar">

          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select>
            <option>All Classes</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

          <select>
            <option>All Risk Levels</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>

        <table>

          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Attendance</th>
              <th>Marks</th>
              <th>Risk Level</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.map((student) => (
              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.className}</td>

                <td>{student.attendance}%</td>

                <td>{student.marks}%</td>

                <td>
                  <span className={`risk ${student.risk.toLowerCase()}-risk`}>
                    {student.risk}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}

export default Students;