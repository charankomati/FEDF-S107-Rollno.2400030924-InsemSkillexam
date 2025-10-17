import React from "react";
function Welcome({ name }) {
  const cardStyle = {
    backgroundColor: "#f0f8ff",
    border: "2px solid #00bfa5",
    borderRadius: "12px",
    margin: "10px",
    padding: "15px",
    width: "250px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    color: "#00695c",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <div style={cardStyle}>
      <h2>Welcome, {name}!</h2>
    </div>
  );
}

// App Component
function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "40px",
    backgroundColor: "#fdfdfd",
    padding: "20px",
  };

  const studentsListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const students = ["Deepak", "Charan", "Aisha", "Rahul", "Sneha"];

  return (
    <div style={appStyle}>
      <h1>Student Dashboard</h1>
      <div style={studentsListStyle}>
        {students.map((student, index) => (
          <Welcome key={index} name={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
