import React from 'react';
import Sitting from '../images/sitting.svg';
import { HeaderBig, Button } from '../styles/BasicComponents';
import {
  HelloProgrammerSection,
  HelloBlock,
  HelloBodyParagrap,
} from '../styles/Main';

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
      <Sitting />
    </HelloProgrammerSection>
  );
};

export default Hello;
