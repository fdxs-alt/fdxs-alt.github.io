import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import Person from '../../images/Ellipse.svg';
import { CenteredBodyParagrap, Container } from '../styles/Main';
import useMediaQuery from '../utils/useMediaQuery';
import { Grid } from '../styles/home/PreviousComponent';

const Previous = () => {
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isSmall = useMediaQuery('(max-width: 600px)');

  return (
    <Wrapper>
      <Container>
        <HeaderBig bold style={{ textAlign: 'center' }}>
          Poznaj swoich poprzedników!
        </HeaderBig>
        <CenteredBodyParagrap marginbottom={4} width={60}>
          Przewodzę tej społeczności i daję całą swoją 10 letnią wiedzę i
          doświadczenie dla dobra nowych pokoleń programistów JS
        </CenteredBodyParagrap>
        <Grid>
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
