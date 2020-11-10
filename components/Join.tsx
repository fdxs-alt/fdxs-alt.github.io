import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import {
  Card,
  CardsWrapper,
  CardText,
  CenteredBodyParagrap,
  IconContainer,
} from '../styles/Main';
import Mentor from '../images/icons/mentor.svg';
import Lens from '../images/icons/znajdziesz_programistów.svg';
import Discount from '../images/icons/aktualna_wiedza_i_rabaty.svg';
import V_4 from '../images/figures/Vector-3.svg';
import styled from 'styled-components';
import size from '../utils/size';

const VectorFour = styled(V_4)`
  position: absolute;
  margin-top: -350px;
  z-index: -10;

  @media (max-width: ${size.laptop}) {
    width: 30%;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const Container = styled.div`
  width: 60%;
  margin: 2em auto;

  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;

const Join = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <HeaderBig bold centered>
            Dołączając do społeczności Gladiatorów na Discordzie
          </HeaderBig>
        </Container>
        <CardsWrapper>
          <Card>
            <IconContainer>
              <Mentor />
            </IconContainer>
            <CardText>
              Znajdziesz pomoc doświadczonego mentora podczas nauki
            </CardText>
          </Card>
          <Card>
            <IconContainer>
              <Lens />
            </IconContainer>
            <CardText>
              Znajdziesz programistów na podobnym poziomie, z którymi będziesz
              mógł ćwiczyć swoje skile koderskie
            </CardText>
          </Card>
          <Card>
            <IconContainer>
              <Discount />
            </IconContainer>
            <CardText>
              Znajdziesz aktualną wiedzę i rabaty na wartościowe kursy oraz
              kompanów do realizacji projektów do portfolio.
            </CardText>
          </Card>
        </CardsWrapper>
        <CenteredBodyParagrap style={{ marginTop: '2rem' }}>
          Ta społeczność jest efektem pracy z ponad 100 programistów przez pół
          roku w różnych modelach nauki, po to aby znaleźć najlepszą formę
          nauczania
        </CenteredBodyParagrap>
      </Wrapper>
      <VectorFour />
    </>
  );
};

export default Join;
