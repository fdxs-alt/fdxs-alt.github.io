import React from 'react';
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
          <CardText>
            Wymienionych ze studentami wiadomościa na slacku i messengerze
          </CardText>
        </Card>
        <Card>
          <CardText>
            Prowadzę mentorską szkołę programowania Localhost Academy
          </CardText>
        </Card>
        <Card>
          <CardText>
            Prowadzę mentorską szkołę programowania Localhost Academy
          </CardText>
        </Card>
      </CardsWrapper>
    </Wrapper>
  );
};

export default MePrograming;
