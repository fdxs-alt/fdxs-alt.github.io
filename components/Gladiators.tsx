import React from 'react';
import styled from 'styled-components';
import V_6 from '../images/figures/Vector-5.svg';
import { HeaderBig, HeaderSmall, Wrapper } from '../styles/BasicComponents';
import { Card, CardsWrapper, CardText, IconContainer } from '../styles/Main';
import HardTask from '../images/icons/trudne_zadania.svg';
import Projects from '../images/icons/unikatowe_projekty.svg';
import Society from '../images/icons/spolecznosc_js.svg';
import size from '../utils/size';

const VectorSix = styled(V_6)`
  margin-top: -100px;
  position: absolute;

  @media (max-width: ${size.laptop}) {
    width: 20%;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const GladiatorsWrapper = styled(CardsWrapper)`
  width: 70%;
  margin: 2rem auto 200px auto;
`;

const Gladiators = () => {
  return (
    <>
      <VectorSix />
      <Wrapper>
        <HeaderBig bold centered>
          Gladiatorzy to
        </HeaderBig>
        <GladiatorsWrapper>
          <Card>
            <IconContainer>
              <Society />
            </IconContainer>
            <CardText>
              Świadoma i zmotywowana społeczność młodych JS devów
            </CardText>
          </Card>

          <Card>
            <IconContainer>
              <HardTask />
            </IconContainer>
            <CardText>
              Trudne zadania techniczne, przy których rekrutacja to pestka
            </CardText>
          </Card>

          <Card>
            <IconContainer>
              <Projects />
            </IconContainer>
            <CardText>
              Unikatowe projekty do portfolio pozwalające się wybić w tłumie
              todolist
            </CardText>
          </Card>
        </GladiatorsWrapper>
        <HeaderSmall bold centered>
          Lepiej uczyć się w zgranej grupie, niż samemu!
        </HeaderSmall>
      </Wrapper>
    </>
  );
};

export default Gladiators;
