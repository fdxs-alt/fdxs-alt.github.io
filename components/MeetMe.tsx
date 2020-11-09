import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import { CenteredBodyParagrap, Container } from '../styles/Main';
import Portrait from '../images/Image.svg';
const MeetMe = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderBig bold>Poznaj mnie!</HeaderBig>
        <Portrait />
        <CenteredBodyParagrap marginbottom={2}>
          CHCĘ BYĆ TAKIM MENTOREM JAKIEGO SAM CHCIAŁBYM MIEĆ, JAK ZACZYNAŁEM
          SWOJĄ PRZYGODĘ Z PROGRAMOWANIEM PRAWIE 10 LAT TEMU
        </CenteredBodyParagrap>
      </Container>
    </Wrapper>
  );
};

export default MeetMe;
