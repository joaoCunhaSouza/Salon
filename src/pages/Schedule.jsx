import React, { useState } from "react";
import "./styles-employee.css";
import '../main-page.css';  

export function Schedule() {
  const [schedules, setSchedules] = useState([
    { id: 1, employee: "João Silva", date: "2024-12-10", shift: "Morning" },
    { id: 2, employee: "Maria Santos", date: "2024-12-10", shift: "Afternoon" },
    { id: 3, employee: "Carlos Pereira", date: "2024-12-11", shift: "Morning" },
    { id: 4, employee: "Ana Oliveira", date: "2024-12-11", shift: "Afternoon" },
    { id: 5, employee: "Fernanda Costa", date: "2024-12-12", shift: "Night" },
    { id: 6, employee: "Roberto Lima", date: "2024-12-12", shift: "Morning" },
    { id: 7, employee: "Paula Souza", date: "2024-12-13", shift: "Afternoon" },
    { id: 8, employee: "Ricardo Gomes", date: "2024-12-13", shift: "Night" },
    { id: 9, employee: "Juliana Silva", date: "2024-12-14", shift: "Morning" },
    { id: 10, employee: "Eduardo Martins", date: "2024-12-14", shift: "Afternoon" }
  ]);

  const handleDelete = (id) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Editing schedule with ID: ${id}`);
  };

  return (
    <div className="wireframe schedule">
      <h1>Employee Schedule</h1>
      <div className="actions">
        <input type="date" className="date-input" />
        <button className="add-button">+ Add Schedule</button>
        <button className="view-schedule">View Schedule</button>
        <button className="export-button">Export Schedules</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Shift</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.employee}</td>
              <td>{schedule.date}</td>
              <td>{schedule.shift}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(schedule.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(schedule.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
