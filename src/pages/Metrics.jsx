import React from "react";
import "./styles-metrics.css";

export function Metrics() {
  return (
    <div className="wireframe metrics">
      <h1>Employee Metrics</h1>
      <div className="metrics-container">
        {/* Círculos */}
        <div className="metric-card">
          <div className="metric-circle">
            <span className="metric-value">85%</span>
          </div>
          <h3 className="metric-title">Attendance Rate</h3>
        </div>
        <div className="metric-card">
          <div className="metric-circle">
            <span className="metric-value">72%</span>
          </div>
          <h3 className="metric-title">Task Completion</h3>
        </div>

        {/* Barras (Escadas) */}
        <div className="metric-card">
          <div className="metric-deg">
            <div className="deg-bar" style={{ width: '90%' }}></div>
          </div>
          <h3 className="metric-title">Efficiency</h3>
        </div>
        <div className="metric-card">
          <div className="metric-deg">
            <div className="deg-bar" style={{ width: '60%' }}></div>
          </div>
          <h3 className="metric-title">Customer Satisfaction</h3>
        </div>

        {/* Pirâmide */}
        <div className="metric-card">
          <div className="metric-pyramid">
            <div className="pyramid-level" style={{ height: '20%' }}></div>
            <div className="pyramid-level" style={{ height: '40%' }}></div>
            <div className="pyramid-level" style={{ height: '60%' }}></div>
            <div className="pyramid-level" style={{ height: '80%' }}></div>
            <div className="pyramid-level" style={{ height: '100%' }}></div>
          </div>
          <h3 className="metric-title">Project Completion Rate</h3>
        </div>

        {/* Escada */}
        <div className="metric-card">
          <div className="metric-ladder">
            <div className="ladder-step" style={{ height: '25%' }}></div>
            <div className="ladder-step" style={{ height: '50%' }}></div>
            <div className="ladder-step" style={{ height: '75%' }}></div>
            <div className="ladder-step" style={{ height: '100%' }}></div>
          </div>
          <h3 className="metric-title">Employee Engagement</h3>
        </div>

        {/* Nova Métrica - Leadership Skills */}
        <div className="metric-card">
          <div className="metric-circle">
            <span className="metric-value">78%</span>
          </div>
          <h3 className="metric-title">Leadership Skills</h3>
        </div>

        {/* Nova Métrica - Revenue Growth */}
        <div className="metric-card">
          <div className="metric-deg">
            <div className="deg-bar" style={{ width: '80%' }}></div>
          </div>
          <h3 className="metric-title">Revenue Growth</h3>
        </div>
      </div>
    </div>
  );
}
