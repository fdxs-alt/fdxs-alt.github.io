import React from 'react';
import SittingVector from '../../images/png/sitting.png';
import { HeaderBig, Button } from '../styles/BasicComponents';
import {
  HelloProgrammerSection,
  HelloBlock,
  HelloBodyParagrap,
} from '../styles/Main';
import styled from 'styled-components';
import size from '../utils/size';

const Sitting = styled.img`
  width: 50%;

  @media (max-width: ${size.tablet}) {
    max-width: 500px;
    width: 100%;
  }
`;

const Hello = () => {
  return (
    <HelloProgrammerSection>
      <HelloBlock>
        <HeaderBig bold>Hej, programisto!</HeaderBig>
        <HelloBodyParagrap>
          Tworzymy społeczność newbie i junior JS devów, którzy chcą wspólnie
          się uczyć, aby szybciej być gotowym na rynek.
        </HelloBodyParagrap>
        <Button primary>Dołącz do Gladiatorów Javascriptu!</Button>
      </HelloBlock>
      <Sitting src={SittingVector} />
    </HelloProgrammerSection>
  );
};

export default Hello;
