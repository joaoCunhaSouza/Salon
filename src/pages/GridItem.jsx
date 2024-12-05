import React from "react";
import '../main-page.css';


const GridItem = ({title, description, dateText }) => (
  <div className="grid-item">
   
    <h1 className="logo-h1">{title}</h1>
    <p className="descricao-h1">{description}</p>

      
      <h1 className="texto-h1">{dateText}</h1>
    </div>

);

export default GridItem;
