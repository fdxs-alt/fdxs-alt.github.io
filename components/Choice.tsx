import React from 'react';
import {
  BodyParagraph,
  HeaderBig,
  HeaderMedium,
  HeaderSmall,
  SpaceBetweenContainer,
  Wrapper,
} from '../styles/BasicComponents';
import { CenteredBodyParagrap } from '../styles/Main';
import styled from 'styled-components';
import B from '../images/Books.svg';
const BooksContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.primary};
  width: 70%;
  padding: 1.5rem;
  margin: auto;
`;

const Books = styled(B)`
  width: 50%;
`;

const ItemInfo = styled.div`
  width: 60%;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Choice = () => {
  return (
    <Wrapper>
      <HeaderBig bold centered>
        Wybierz coś dla siebie
      </HeaderBig>
      <CenteredBodyParagrap width={70} marginbottom={3.1}>
        Możesz w prosty sposób dożywotnio dołączyć do społeczności Gladiatorów
        inwestując jednorazowo w zestaw zbiorów
      </CenteredBodyParagrap>
      <BooksContainer>
        <SpaceBetweenContainer>
          <Books />
          <div>
            <SpaceBetweenContainer>
              <ItemInfo>
                <HeaderSmall bold>
                  Wszystkie zbiory zadań Gladiatorów Javascriptu
                </HeaderSmall>
              </ItemInfo>
              <PriceInfo>
                <HeaderMedium bold>400 zł</HeaderMedium>
                <BodyParagraph style={{ textDecoration: 'line-through' }}>
                  400 zł
                </BodyParagraph>
              </PriceInfo>
            </SpaceBetweenContainer>
            <ItemInfo>
              <BodyParagraph>
                Zestaw zbiorów + Dołączenie do społeczności
              </BodyParagraph>
            </ItemInfo>
          </div>
        </SpaceBetweenContainer>
      </BooksContainer>
    </Wrapper>
  );
};

export default Choice;
