import React from 'react';
import { HeaderBig } from '../styles/BasicComponents';
import {
  CenteredBodyParagrap,
  Bold,
  CardsWrapper,
  IconContainer,
  CardText,
  Card,
} from '../styles/Main';
import CodeReview from '../../images/icons/cotygodniowe_review.svg';
import JSDSC from '../../images/icons/js_dsc.svg';
import Teams from '../../images/icons/zgrane_teamy_portfolio.svg';
import { useInView } from 'react-intersection-observer';

const Solution = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <HeaderBig
        bold
        style={{ textAlign: 'center', marginTop: '7em' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ..a ja rozwiązanie!
      </HeaderBig>
      <CenteredBodyParagrap marginbottom={4}>
        Każdy z tych problemów rozwiązuje inicjatywa, którą nazwałem
        <Bold> Gladiatorzy Javascriptu.</Bold>
      </CenteredBodyParagrap>
      <CenteredBodyParagrap marginbottom={3}>
        Można ją opisać w 3 głównych punktach:
      </CenteredBodyParagrap>
      <CardsWrapper ref={ref}>
        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <IconContainer>
            <JSDSC />
          </IconContainer>
          <CardText>
            Jesteśmy pomocną i zmotywowaną społecznością JSowców na Discordzie
          </CardText>
        </Card>
        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <IconContainer>
            <CodeReview />
          </IconContainer>
          <CardText>
            Realizujemy trudne i wymagające zadania w code pairing z
            cotygodniowym code review
          </CardText>
        </Card>
        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <IconContainer>
            <Teams />
          </IconContainer>
          <CardText>
            Pracujemy w zgranych teamach nad ambitnymi projektami do portfolio.
          </CardText>
        </Card>
      </CardsWrapper>
    </>
  );
};

export default Solution;
