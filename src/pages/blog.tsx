import React from 'react';
import {
  Container,
  FlexEndWrapper,
  HeaderBig,
} from '../styles/BasicComponents';
import { CenteredBodyParagrap } from '../styles/Main';
import Layout from '../template/Layout';
import Card from '../components/Card';
import {
  VectorOne,
  BlogWrapper,
  BlogGrid,
  VectorTwo,
} from '../styles/Blog/Blog';

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
