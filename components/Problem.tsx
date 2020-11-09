import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import Laptop from '../images/icons/laptop_1.svg';
import Hat from '../images/icons/graduation-hat_1.svg';
import Megaphone from '../images/icons/megaphone.svg';
import Idea from '../images/icons/idea_1.svg';
import CodeReview from '../images/icons/cotygodniowe_review.svg';
import JSDSC from '../images/icons/js_dsc.svg';
import Teams from '../images/icons/zgrane_teamy_portfolio.svg';
import {
  CenteredBodyParagrap,
  Grid,
  GridItem,
  GridItemBody,
  IconContainer,
  ProblemSection,
  Card,
  CardsWrapper,
  CardText,
  VectorTwo,
} from '../styles/Main';

const Problem = () => {
  return (
    <>
      <Wrapper>
        <ProblemSection>
          <HeaderBig bold style={{ textAlign: 'center' }}>
            Zapewne masz problem..
          </HeaderBig>
          <CenteredBodyParagrap marginbottom={4}>
            Jako młody programista na codzień mierzysz sie z poniższymi
            problemami:
          </CenteredBodyParagrap>

          <Grid>
            <GridItem>
              <GridItemBody>
                Jak skutecznie mam się rozwijać i które umiejętności są istotne?
              </GridItemBody>
              <IconContainer>
                <Hat />
              </IconContainer>
            </GridItem>
            <GridItem reverse>
              <GridItemBody reverse>
                Gdzie znajdę doświadczonego kolegę, który sprawdzi mój kod?
              </GridItemBody>
              <IconContainer>
                <Megaphone />
              </IconContainer>
            </GridItem>
            <GridItem>
              <GridItemBody>
                Gdzie mogę znaleźć praktyczne zadania programistyczne, które
                stanowią wyzwanie i zapewnią rozwój?
              </GridItemBody>
              <IconContainer>
                <Laptop />
              </IconContainer>
            </GridItem>
            <GridItem reverse>
              <GridItemBody reverse>
                Gdzie znajdę osoby chętne do współpracy przy projektach?
              </GridItemBody>
              <IconContainer>
                <Idea />
              </IconContainer>
            </GridItem>
          </Grid>
          <HeaderBig bold style={{ textAlign: 'center', marginTop: '7em' }}>
            ..a ja rozwiązanie!
          </HeaderBig>
          <CenteredBodyParagrap marginbottom={4}>
            Każdy z tych problemów rozwiązuje inicjatywa, którą nazwałem
            Gladiatorzy Javascriptu.
          </CenteredBodyParagrap>
          <CenteredBodyParagrap marginbottom={3}>
            Można ją opisać w 3 głównych punktach:
          </CenteredBodyParagrap>
          <CardsWrapper>
            <Card>
              <IconContainer>
                <JSDSC />
              </IconContainer>
              <CardText>
                Jesteśmy pomocną i zmotywowaną społecznością JSowców na
                Discordzie
              </CardText>
            </Card>
            <Card>
              <IconContainer>
                <CodeReview />
              </IconContainer>
              <CardText>
                Realizujemy trudne i wymagające zadania w code pairing z
                cotygodniowym code review
              </CardText>
            </Card>
            <Card>
              <IconContainer>
                <Teams />
              </IconContainer>
              <CardText>
                Pracujemy w zgranych teamach nad ambitnymi projektami do
                portfolio.
              </CardText>
            </Card>
          </CardsWrapper>
        </ProblemSection>
      </Wrapper>
      <VectorTwo />
    </>
  );
};

export default Problem;
