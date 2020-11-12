import React from 'react';
import { HeaderBig, HeaderSmall, Wrapper } from '../styles/BasicComponents';
import { Card, CardText, IconContainer } from '../styles/Main';
import HardTask from '../../images/icons/trudne_zadania.svg';
import Projects from '../../images/icons/unikatowe_projekty.svg';
import Society from '../../images/icons/spolecznosc_js.svg';
import {
  VectorSix,
  GladiatorsWrapper,
} from '../styles/Home/GladiatorsComponent';
import { useInView } from 'react-intersection-observer';

const Gladiators = () => {
  const { inView, ref } = useInView({ triggerOnce: true });

  return (
    <>
      <VectorSix />
      <Wrapper>
        <HeaderBig bold centered>
          Gladiatorzy to
        </HeaderBig>
        <GladiatorsWrapper
          ref={ref}
          animate={{ opacity: inView ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
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
