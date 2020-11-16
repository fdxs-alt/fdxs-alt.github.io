import React from 'react';
import {
  Container,
  FlexEndWrapper,
  HeaderBig,
} from '../styles/BasicComponents';
import { CenteredBodyParagrap } from '../styles/Main';
import Layout from '../template/Layout';
import styled from 'styled-components';
import size from '../utils/size';
import Card from '../components/Card';
import V_1 from '../../images/figures/Vector.svg';
import V_2 from '../../images/figures/Vector-1.svg';
const BlogGrid = styled.section`
  display: grid;
  margin: auto;
  width: 100%;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(4, 25%);
  column-gap: 1rem;
  @media (max-width: ${size.laptop}) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(6, 16.5%);
  }

  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
`;

const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 0 auto 200px auto;
  position: relative;
  @media (max-width: ${size.laptop}) {
    width: 80%;
  }

  @media (max-width: ${size.tablet}) {
    width: 85%;
  }

  @media (max-width: ${size.small}) {
    width: 90%;
  }
`;

export const VectorOne = styled(V_1)`
  position: absolute;
  max-width: 375px;
  margin-top: 0;
  @media (max-width: ${size.tablet}) {
    display: none;
  }
  z-index: -1000;
`;
export const VectorTwo = styled(V_2)`
  position: absolute;
  width: 375px;
  margin-top: -80%;
  @media (max-width: ${size.tablet}) {
    display: none;
  }
  z-index: -1000;
`;
const blog = () => {
  return (
    <Layout>
      <Container>
        <FlexEndWrapper>
          <VectorOne />
        </FlexEndWrapper>
        <BlogWrapper>
          <HeaderBig centered bold>
            Witaj na Blogu!
          </HeaderBig>
          <CenteredBodyParagrap>
            Tutaj odnajdziesz wszystkie informacje o spółeczności Gladiatorów
            Javascriptu
          </CenteredBodyParagrap>

          <BlogGrid>
            {[...Array(12).keys()].map((_, i: number) => (
              <Card key={i} />
            ))}
          </BlogGrid>
        </BlogWrapper>
        <VectorTwo />
      </Container>
    </Layout>
  );
};

export default blog;
