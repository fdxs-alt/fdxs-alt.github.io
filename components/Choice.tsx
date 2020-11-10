import React from 'react';
import {
  BodyParagraph,
  Button,
  HeaderBig,
  HeaderMedium,
  HeaderSmall,
  SpaceBetweenContainer,
  Wrapper,
} from '../styles/BasicComponents';
import { Card, CardText, CenteredBodyParagrap } from '../styles/Main';
import styled from 'styled-components';
import B from '../images/Books.svg';
import Green from '../images/green.svg';
import Yellow from '../images/yellow.svg';
import Red from '../images/red.svg';
import size from '../utils/size';
const LightBorderContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.primary};
  width: 70%;
  padding: 1.5rem;
  margin: 0 auto 100px auto;
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

const BookCard = styled(Card)`
  padding: 1.7rem;
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);
  justify-content: space-between;
`;

const LinedParagraph = styled(BodyParagraph)`
  margin-bottom: 24px;
  text-decoration: line-through;
`;

const BookCardsWrapper = styled(SpaceBetweenContainer)`
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
  }
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
      <LightBorderContainer>
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
                <HeaderMedium bold>300 zł</HeaderMedium>
                <BodyParagraph style={{ textDecoration: 'line-through' }}>
                  400 zł
                </BodyParagraph>
              </PriceInfo>
            </SpaceBetweenContainer>
            <div style={{ width: '70%' }}>
              <BodyParagraph>
                Zestaw zbiorów + Dołączenie do społeczności
              </BodyParagraph>
            </div>
          </div>
        </SpaceBetweenContainer>
        <SpaceBetweenContainer>
          <Button style={{ width: '45%' }}>582413</Button>
          <Button style={{ width: '45%' }} primary>
            Dołączam do Gladiatorów
          </Button>
        </SpaceBetweenContainer>
      </LightBorderContainer>
      <CenteredBodyParagrap marginbottom={6.2}>
        Jeśli wiesz, że jesteś kozakiem programowania i chciałbyś podjąć próbę
        nauki samodzielnie to możesz sprawdzić zbiory oddzielnie
      </CenteredBodyParagrap>
      <BookCardsWrapper>
        <BookCard>
          <Red />
          <HeaderSmall bold centered>
            Nieprzewidziane i sprawiające problemy testy JS i React
          </HeaderSmall>
          <CardText>
            Zbiór z zaawansowanymi zadaniami na testy z JS i React
          </CardText>
          <HeaderMedium bold>120 zł</HeaderMedium>
          <LinedParagraph>150 zł</LinedParagraph>
          <Button primary>Kliknij, aby zamówić!</Button>
        </BookCard>
        <BookCard>
          <Yellow />
          <HeaderSmall bold centered>
            Ambitne i wymagające zadania z JS i React
          </HeaderSmall>
          <CardText>Zbiór z zaawansowanymi zadaniami z JS i React</CardText>

          <HeaderMedium bold>120 zł</HeaderMedium>
          <LinedParagraph>150 zł</LinedParagraph>
          <Button primary>Kliknij, aby zamówić!</Button>
        </BookCard>
        <BookCard>
          <Green />
          <HeaderSmall bold centered>
            Rozwijające i utrwalające zadania z HTML, CSS i JS
          </HeaderSmall>
          <CardText>Zbiór zaawansowanych zadań z HTML, CSS i JS</CardText>
          <HeaderMedium bold>100 zł</HeaderMedium>
          <LinedParagraph>120 zł</LinedParagraph>
          <Button primary>Kliknij, aby zamówić!</Button>
        </BookCard>
      </BookCardsWrapper>
    </Wrapper>
  );
};

export default Choice;
