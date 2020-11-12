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
import { motion } from 'framer-motion';

const Sitting = styled(motion.img)`
  width: 50%;

  @media (max-width: ${size.tablet}) {
    max-width: 500px;
    width: 100%;
  }
`;

const Hello = () => {
  return (
    <HelloProgrammerSection>
      <HelloBlock
        animate={{ x: 0 }}
        initial={{ x: '-200%' }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
      >
        <HeaderBig bold>Hej, programisto!</HeaderBig>
        <HelloBodyParagrap>
          Tworzymy społeczność newbie i junior JS devów, którzy chcą wspólnie
          się uczyć, aby szybciej być gotowym na rynek.
        </HelloBodyParagrap>
        <Button primary>Dołącz do Gladiatorów Javascriptu!</Button>
      </HelloBlock>
      <Sitting
        src={SittingVector}
        animate={{ x: 0 }}
        initial={{ x: '200%' }}
        transition={{
          duration: 0.3,
          delay: 0.2,
        }}
      />
    </HelloProgrammerSection>
  );
};

export default Hello;
