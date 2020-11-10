import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../styles/BasicComponents';
import size from './size';

const OpinionsWrapper = styled(Wrapper)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.grey_4};
  box-shadow: 0px 5px 11px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);
`;

const StepsWrapper = styled.div`
  width: 25%;
  display: flex;
  margin: 50px 0 100px 0;
  justify-content: space-between;

  @media (max-width: ${size.small}) {
    width: 50%;
  }
`;
interface IStep {
  selected?: boolean;
}

const Step = styled.button<IStep>`
  width: 20px;
  z-index: 10;
  height: 20px;
  border-radius: 50%;
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.colors.primary : props.theme.colors.grey_3};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.white};
  cursor: pointer;
  outline: none;
`;

const Stepper: React.FC = ({ children }) => {
  const [step, setStep] = useState(0);

  const childrenArray = Children.toArray(children);
  return (
    <OpinionsWrapper>
      {childrenArray[step]}
      <StepsWrapper>
        {[...Array(childrenArray.length).keys()].map((_, i: number) => (
          <Step key={i} onClick={() => setStep(i)} selected={i === step} />
        ))}
      </StepsWrapper>
    </OpinionsWrapper>
  );
};

export default Stepper;
