import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import Laptop from '../../images/icons/laptop_1.svg';
import Hat from '../../images/icons/graduation-hat_1.svg';
import Megaphone from '../../images/icons/megaphone.svg';
import Idea from '../../images/icons/idea_1.svg';
import {
  CenteredBodyParagrap,
  Grid,
  GridItem,
  GridItemBody,
  IconContainer,
  ProblemSection,
  VectorTwo,
  Bold,
} from '../styles/Main';
import { useInView } from 'react-intersection-observer';
import Solution from './Solution';
const Problem = () => {
  const { inView, ref } = useInView({ triggerOnce: true });
  return (
    <>
      <Wrapper ref={ref}>
        <ProblemSection>
          <HeaderBig bold style={{ textAlign: 'center' }}>
            Zapewne masz problem..
          </HeaderBig>
          <CenteredBodyParagrap marginbottom={4}>
            Jako młody programista na codzień mierzysz sie z poniższymi
            problemami:
          </CenteredBodyParagrap>

          <Grid>
            <GridItem
              animate={{ x: inView ? 0 : '-200%' }}
              initial={{ x: '-200%' }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <GridItemBody>
                <Bold>Jak</Bold> skutecznie mam się rozwijać i które
                umiejętności są istotne?
              </GridItemBody>
              <IconContainer>
                <Hat />
              </IconContainer>
            </GridItem>
            <GridItem
              reverse
              animate={{ x: inView ? 0 : '200%' }}
              initial={{ x: '200%' }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <GridItemBody reverse>
                <Bold>Gdzie</Bold> znajdę doświadczonego kolegę, który sprawdzi
                mój kod?
              </GridItemBody>
              <IconContainer>
                <Megaphone />
              </IconContainer>
            </GridItem>
            <GridItem
              animate={{ x: inView ? 0 : '-200%' }}
              initial={{ x: '-200%' }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <GridItemBody>
                <Bold>Gdzie</Bold> mogę znaleźć praktyczne zadania
                programistyczne, które stanowią wyzwanie i zapewnią rozwój?
              </GridItemBody>
              <IconContainer>
                <Laptop />
              </IconContainer>
            </GridItem>
            <GridItem
              reverse
              animate={{ x: inView ? 0 : '200%' }}
              initial={{ x: '200%' }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <GridItemBody reverse>
                <Bold>Gdzie </Bold>znajdę osoby chętne do współpracy przy
                projektach?
              </GridItemBody>
              <IconContainer>
                <Idea />
              </IconContainer>
            </GridItem>
          </Grid>
          <Solution />
        </ProblemSection>
      </Wrapper>
      <VectorTwo />
    </>
  );
};

export default Problem;
