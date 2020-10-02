import React from 'react';
//components
import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
//styles
import { Container } from './styles';
 
const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent 
                  label="Model One"
                  description="Order Online fron Delivery"
                />
              }
            />
          ))}
          
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
