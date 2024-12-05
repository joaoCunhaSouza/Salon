import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import GridItem from "../pages/GridItem/";

const MainSection = () => (
  <section className="quad">
    <Link to="/Schedule">
      <GridItem
        title="Schedule"
        description="Easily manage and organize your daily tasks and appointments."
      />
    </Link>

    <Link to="/Employee">
      <GridItem
        title="Employee"
        description="Efficiently oversee and track employee records and performance."
      />
    </Link>

    <Link to="/Metrics">
      <GridItem
        title="Metrics"
        description="Analyze essential data to drive insights and improve performance."
      />
    </Link>

    <Link to="/Stock">
      <GridItem
        title="Stock"
        description="Manage your product inventory with complete accuracy and control."
      />
    </Link>
  </section>
);

export default MainSection;
