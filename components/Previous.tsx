import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import styled from 'styled-components';
import Person from '../images/women-1.svg';
import { CenteredBodyParagrap, Container } from '../styles/Main';

const GridWrapper = styled(Wrapper)`
  padding: 8em 0;
`;

const Grid = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(7, 90px);
  grid-template-rows: repeat(3, 90px);
  gap: 1rem;
`;

const Previous = () => {
  return (
    <GridWrapper>
      <Container>
        <HeaderBig bold style={{ textAlign: 'center' }}>
          Poznaj swoich poprzedników!
        </HeaderBig>
        <CenteredBodyParagrap marginbottom={4} width={60}>
          Przewodzę tej społeczności i daję całą swoją 10 letnią wiedzę i
          doświadczenie dla dobra nowych pokoleń programistów JS
        </CenteredBodyParagrap>
        <Grid>
          {[...Array(21).keys()].map((_, index: number) => (
            <Person key={index} />
          ))}
        </Grid>
      </Container>
    </GridWrapper>
  );
};

export default Previous;
