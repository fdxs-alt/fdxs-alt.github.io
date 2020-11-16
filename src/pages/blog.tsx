import React, { useState } from 'react';
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
import styled from 'styled-components';

const SortTittle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const SortList = styled.ul`
  list-style-type: none;

  &:hover {
    li {
      display: block;
    }
  }
`;

const SortElement = styled.li`
  display: none;
`;

const blog = () => {
  const [selected, setSelected] = useState('od najnowszego');

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
          <FlexEndWrapper>
            <SortList>
              <SortTittle>Sortuj według: {selected}</SortTittle>
              <SortElement onClick={() => setSelected('od najnowszego')}>
                od najnowszego
              </SortElement>
              <SortElement
                value="od najstarszego"
                onClick={() => setSelected('od najstraszego')}
              >
                od najstarszego
              </SortElement>
            </SortList>
          </FlexEndWrapper>
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
