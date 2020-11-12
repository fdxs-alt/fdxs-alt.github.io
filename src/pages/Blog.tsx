import React from 'react';
import { HeaderBig } from '../styles/BasicComponents';
import { CenteredBodyParagrap } from '../styles/Main';
import Layout from '../template/Layout';
import styled from 'styled-components';
import size from '../utils/size';
import Card from '../components/Card';
const BlogGrid = styled.section`
  display: grid;
  margin: auto;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1em;
`;

const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 0 auto 200px auto;

  @media (max-width: ${size.laptop}) {
    width: 75%;
  }

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }

  @media (max-width: ${size.small}) {
    width: 90%;
  }
`;

const Blog = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Blog;
