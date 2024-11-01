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
    
      title="Service 2"
      description="Description for service 2."
   
      dateText="To schedule"
    />
    <GridItem

      title="Service 3"
      description="Description for service 3."
  
      dateText="To schedule"
    />

<GridItem

title="Service 4"
description="Description for service 3."

dateText="To schedule"
/>

<GridItem

title="Service 5"
description="Description for service 3."

dateText="To schedule"
/>

<GridItem

title="Service 6"
description="Description for service 3."

dateText="To schedule"
/>
    {/* Add more <GridItem /> components as needed */}
  </section>
);

export default MainSection;
