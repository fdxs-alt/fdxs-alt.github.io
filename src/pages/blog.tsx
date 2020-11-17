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
  SelectedSort,
  SortContainer,
  SortedElement,
  SortedList,
  SortedWrapper,
  SortTittle,
} from '../styles/Blog/Blog';
import Down from '../../images/icons/down.svg';

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
            <SortContainer tabIndex={0}>
              <SortedWrapper>
                <SortTittle>Sortuj według:</SortTittle>
                <SelectedSort>
                  {selected} <Down />
                </SelectedSort>
              </SortedWrapper>
              <SortedList>
                <SortedElement
                  onClick={() => setSelected('od najnowszego')}
                  tabIndex={0}
                >
                  od najnowszego
                </SortedElement>
                <SortedElement
                  tabIndex={0}
                  onClick={() => setSelected('od najstraszego')}
                >
                  od najstarszego
                </SortedElement>
              </SortedList>
            </SortContainer>
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
