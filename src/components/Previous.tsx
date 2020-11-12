import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import Person from '../../images/Ellipse.svg';
import { CenteredBodyParagrap, Container } from '../styles/Main';
import useMediaQuery from '../utils/useMediaQuery';
import { Grid } from '../styles/Home/PreviousComponent';
import { useInView } from 'react-intersection-observer';

const Previous = () => {
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isSmall = useMediaQuery('(max-width: 600px)');
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <Wrapper>
      <Container>
        <HeaderBig bold style={{ textAlign: 'center' }}>
          Poznaj swoich poprzedników!
        </HeaderBig>
        <CenteredBodyParagrap marginbottom={4} width={60} ref={ref}>
          Przewodzę tej społeczności i daję całą swoją 10 letnią wiedzę i
          doświadczenie dla dobra nowych pokoleń programistów JS
        </CenteredBodyParagrap>
        <Grid
          initial={{ opacity: 0, y: '200%' }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : '200%' }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {[
            ...Array(isTablet ? (isSmall ? 6 : 12) : isSmall ? 6 : 21).keys(),
          ].map((_, index: number) => (
            <Person key={index} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Previous;
