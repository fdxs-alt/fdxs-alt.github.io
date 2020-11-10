import React from 'react';
import { Portrait, AboutMeParagraph } from '../styles/Home/MeetMeComponent';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import { Container } from '../styles/Main';

const MeetMe = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderBig bold>Poznaj mnie!</HeaderBig>
        <Portrait />
        <AboutMeParagraph marginbottom={2}>
          CHCĘ BYĆ TAKIM MENTOREM JAKIEGO SAM CHCIAŁBYM MIEĆ, JAK ZACZYNAŁEM
          SWOJĄ PRZYGODĘ Z PROGRAMOWANIEM PRAWIE 10 LAT TEMU
        </AboutMeParagraph>
      </Container>
    </Wrapper>
  );
};

export default MeetMe;
