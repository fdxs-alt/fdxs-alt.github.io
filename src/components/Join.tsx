import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import {
  Card,
  CardsWrapper,
  CardText,
  CenteredBodyParagrap,
  IconContainer,
} from '../styles/Main';
import Mentor from '../../images/icons/mentor.svg';
import Lens from '../../images/icons/znajdziesz_programistów.svg';
import Discount from '../../images/icons/aktualna_wiedza_i_rabaty.svg';
import { Container, VectorFour } from '../styles/Home/JoinComponent';
import { useInView } from 'react-intersection-observer';

const Join = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <Wrapper>
        <Container>
          <HeaderBig bold centered>
            Dołączając do społeczności Gladiatorów na Discordzie
          </HeaderBig>
        </Container>
        <CardsWrapper
          ref={ref}
          animate={{ opacity: inView ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
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
