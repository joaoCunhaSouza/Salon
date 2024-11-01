// MainSection.jsx
import React from "react";
import GridItem from "../pages/GridItem/";

const MainSection = () => (
  <section className="quad">
    <GridItem
  
      title="Nails Care"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
  
      dateText="To schedule"
    />
    <GridItem
    
      title="Massage"
      description="Dolorum totam nulla aspernatur obcaecati laudantium quie."
   
      dateText="To schedule"
    />
    <GridItem

      title="Hairdresser"
      description="Totam ipsum dolor sit amet consectetur adipiselit. asperiores officiis iste."
  
      dateText="To schedule"
    />

<GridItem

title="Progressive"
description="Obcaecati dolor  consecteasperiores officiis iste optio! Excepturi sun."

dateText="To schedule"
/>

<GridItem

title="Eyebrows"
description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ab!"

dateText="To schedule"
/>

<GridItem

title="Pedicure"
description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem id enim at placeat."

dateText="To schedule"
/>
    {/* Add more <GridItem /> components as needed */}
  </section>
);

export default MainSection;
