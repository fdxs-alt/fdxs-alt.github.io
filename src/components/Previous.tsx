import React from 'react';
import { HeaderBig, Wrapper } from '../styles/BasicComponents';
import Person from '../../images/Ellipse.svg';
import { CenteredBodyParagrap, Container } from '../styles/Main';
import useMediaQuery from '../utils/useMediaQuery';
import { Grid } from '../styles/Home/PreviousComponent';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const IconContainer = styled.div`
  position: relative;

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    content: '+72';
    font-size: 22px;
    font-weight: 700;
    width: 90px;
    height: 90px;
    color: ${(props) => props.theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
`;

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
            ...Array(isTablet ? (isSmall ? 5 : 11) : isSmall ? 11 : 20).keys(),
          ].map((_, index: number) => (
            <Person key={index} />
          ))}
          <IconContainer>
            <Person />
          </IconContainer>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Previous;
