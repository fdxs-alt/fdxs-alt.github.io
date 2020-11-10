import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import { CenteredBodyParagrap, Container } from '../styles/Main';
import PortraitSVG from '../images/Image.svg';
import styled from 'styled-components';
import size from '../utils/size';

const Portrait = styled(PortraitSVG)`
  @media (max-width: ${size.small}) {
    width: 150px;
    height: 150px;
  }
`;

const AboutMeParagraph = styled(CenteredBodyParagrap)`
  position: relative;
  &::before {
    content: '“';
    position: absolute;
    top: 0;
    font-weight: 700;
    font-size: 34px;
    top: -10px;
    left: -10px;
  }
`;
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
