import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import ModelsWrapper from "../Models/ModelsWrapper";
import ModelSection from "../Models/ModelSection";



import { Container } from "./styles";

export const Page: React.FC = () => {

  return (

    <Container>
      <ModelsWrapper>
        <div>

          {[
            "Model One",
            "Model Two",
            "Model Three",
            "Model Four ",
            "Model Dive",
            "Model Six",
            "Model Seven",

          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order online for delivery"
                />

              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>


  )
}

export default Page;