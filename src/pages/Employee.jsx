import React, { useState } from "react";
import "./styles-employee.css";

export function Employee() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "João Silva", role: "Hair Stylist", schedule: "9 AM - 5 PM", status: "Active" },
    { id: 2, name: "Maria Santos", role: "Manager", schedule: "10 AM - 6 PM", status: "On Leave" },
    { id: 3, name: "Carlos Pereira", role: "Barber", schedule: "8 AM - 4 PM", status: "Active" },
    { id: 4, name: "Ana Oliveira", role: "Receptionist", schedule: "9 AM - 5 PM", status: "Active" },
    { id: 5, name: "Fernanda Costa", role: "Hair Stylist", schedule: "11 AM - 7 PM", status: "On Leave" },
    { id: 6, name: "Roberto Lima", role: "Manager", schedule: "12 PM - 8 PM", status: "Active" },
    { id: 7, name: "Paula Souza", role: "Barber", schedule: "10 AM - 6 PM", status: "Active" },
    { id: 8, name: "Ricardo Gomes", role: "Hair Stylist", schedule: "9 AM - 5 PM", status: "Active" },
    { id: 9, name: "Juliana Silva", role: "Receptionist", schedule: "10 AM - 6 PM", status: "On Leave" },
    { id: 10, name: "Eduardo Martins", role: "Barber", schedule: "9 AM - 5 PM", status: "Active" }
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Editing employee with ID: ${id}`);
  };

  return (
    <div className="wireframe employee">
      <h1>Employee Management</h1>
      <div className="actions">
        <button className="add-button">+ Add Employee</button>
        <button className="schedule-button">View Schedules</button>
        <button className="export-button">Export Employees</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Schedule</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.schedule}</td>
              <td>{employee.status}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(employee.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(employee.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
