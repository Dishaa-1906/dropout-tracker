import { useState } from "react";

function AddStudent() {

  const [student, setStudent] = useState({
    name: "",
    age: "",
    gender: "",
    className: "",
    attendance: "",
    marks: "",
    familyIncome: "",
    distance: "",
    parentEducation: "",
    migrationRisk: "No",
    healthConcern: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Student Data:", student);

    alert("Student information saved successfully!");

    setStudent({
      name: "",
      age: "",
      gender: "",
      className: "",
      attendance: "",
      marks: "",
      familyIncome: "",
      distance: "",
      parentEducation: "",
      migrationRisk: "No",
      healthConcern: "No",
    });
  };

  return (
    <main className="dashboard">

      <div className="page-header">
        <div>
          <h1>Add Student</h1>
          <p>Enter student information for risk monitoring.</p>
        </div>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>

        <div className="form-section">
          <h2>Basic Information</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Student Name</label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="Enter student name"
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={student.age}
                onChange={handleChange}
                placeholder="Enter age"
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={student.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Class</label>
              <select
                name="className"
                value={student.className}
                onChange={handleChange}
                required
              >
                <option value="">Select class</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

          </div>
        </div>

        <div className="form-section">
          <h2>Academic Information</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Attendance (%)</label>
              <input
                type="number"
                name="attendance"
                value={student.attendance}
                onChange={handleChange}
                placeholder="Example: 85"
                min="0"
                max="100"
                required
              />
            </div>

            <div className="form-group">
              <label>Average Marks (%)</label>
              <input
                type="number"
                name="marks"
                value={student.marks}
                onChange={handleChange}
                placeholder="Example: 72"
                min="0"
                max="100"
                required
              />
            </div>

          </div>
        </div>

        <div className="form-section">
          <h2>Socio-economic Information</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Annual Family Income</label>
              <input
                type="number"
                name="familyIncome"
                value={student.familyIncome}
                onChange={handleChange}
                placeholder="Enter annual income"
              />
            </div>

            <div className="form-group">
              <label>Distance from School (km)</label>
              <input
                type="number"
                name="distance"
                value={student.distance}
                onChange={handleChange}
                placeholder="Example: 5"
              />
            </div>

            <div className="form-group">
              <label>Parent Education</label>
              <select
                name="parentEducation"
                value={student.parentEducation}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="No formal education">
                  No formal education
                </option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Higher">Higher</option>
              </select>
            </div>

          </div>
        </div>

        <div className="form-section">
          <h2>Additional Risk Factors</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Migration Risk</label>
              <select
                name="migrationRisk"
                value={student.migrationRisk}
                onChange={handleChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="form-group">
              <label>Health Concern</label>
              <select
                name="healthConcern"
                value={student.healthConcern}
                onChange={handleChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

          </div>
        </div>

        <div className="form-actions">
          <button type="reset" className="cancel-button">
            Cancel
          </button>

          <button type="submit" className="add-button">
            Save Student
          </button>
        </div>

      </form>

    </main>
  );
}

export default AddStudent;