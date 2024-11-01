import React from "react";

const GridItem = ({title, description, dateText }) => (
  <div className="grid-item">
   
    <h1>{title}</h1>
    <p>{description}</p>
    <div className="date">
      
      <h1>{dateText}</h1>
    </div>
  </div>
);

export default GridItem;
