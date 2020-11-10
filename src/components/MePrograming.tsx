import React from 'react';
import {
  SolutionHeader,
  Decorated,
} from '../styles/Home/MeProgramingComponent';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import {
  Card,
  CardsWrapper,
  CardText,
  CenteredBodyParagrap,
} from '../styles/Main';

const MePrograming = () => {
  return (
    <Wrapper>
      <HeaderBig bold centered>
        Programuję..
      </HeaderBig>
      <CenteredBodyParagrap>..bo to zajebiście lubię!</CenteredBodyParagrap>
      <CardsWrapper>
        <Card>
          <SolutionHeader bold>
            <Decorated>1+</Decorated> milion
          </SolutionHeader>
          <CardText>
            Wymienionych ze studentami wiadomościa na slacku i messengerze
          </CardText>
        </Card>
        <Card>
          <SolutionHeader bold centered>
            od <Decorated>3 lat</Decorated>
          </SolutionHeader>
          <CardText>
            Prowadzę mentorską szkołę programowania Localhost Academy
          </CardText>
        </Card>
        <Card>
          <SolutionHeader bold centered>
            ponad <Decorated>100 osób</Decorated>
          </SolutionHeader>
          <CardText>Samodzielnie wprowadziłem do świata Frontendu</CardText>
        </Card>
      </CardsWrapper>
    </Wrapper>
  );
};

export default MePrograming;
