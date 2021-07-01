import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import ModelsWrapper from "../Models/ModelsWrapper";
import ModelSection from "../Models/ModelSection";



import { Container, Spacer} from "./styles";
import UniqueOverlay from "../UniqueOverlay";

export const Page: React.FC = () => {

  return (

    <Container>
      <ModelsWrapper>
        <div>

          {[
            "Modelo 1",
            "Modelo 2",
            "Modelo 3",
            "Modelo 4 ",
            "Modelo 5",
            "Modelo 6",
            "Modelo 7",

          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description=""
                />

              }
            />
          ))}
        </div>

              <Spacer/>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>


  )
}

export default Page;