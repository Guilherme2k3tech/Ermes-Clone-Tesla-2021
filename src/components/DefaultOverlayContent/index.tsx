import React from "react";

import { Container, Heading, Buttons} from "../DefaultOverlayContent/styles";

interface Props{
  label: string;
  description: string 
}

export  const DefaultOverlayContent: React.FC <Props> = ({label, description}) =>{

  return(

    <Container>
      <Heading>
        <h1>{label}</h1>
        <h1>{description}</h1>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="White">Existing inventory</button>

      </Buttons>
    </Container>
      


  )
}

export default DefaultOverlayContent ;