import React from 'react';
import {
  BodyParagraph,
  Button,
  HeaderBig,
  HeaderMedium,
  HeaderSmall,
  Wrapper,
} from '../styles/BasicComponents';
import { CardText, CenteredBodyParagrap } from '../styles/Main';
import Green from '../../images/green.svg';
import Yellow from '../../images/yellow.svg';
import Red from '../../images/red.svg';
import {
  LightBorderContainer,
  Books,
  ItemInfo,
  PriceInfo,
  BookCardsWrapper,
  BookCard,
  LinedParagraph,
  BooksWrapper,
  BooksHeader,
  BookBodyParagraph,
  BookHeaderMedium,
  ButtonSpaceBetweenContainer,
  CodeInput,
} from '../styles/Home/ChoiceComponent';
import { useInView } from 'react-intersection-observer';

const Choice = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
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
        <BooksWrapper>
          <Books />
          <div>
            <BooksWrapper>
              <ItemInfo>
                <BooksHeader bold>
                  Wszystkie zbiory zadań Gladiatorów Javascriptu
                </BooksHeader>
                <BookBodyParagraph>
                  Zestaw zbiorów + Dołączenie do społeczności
                </BookBodyParagraph>
              </ItemInfo>
              <PriceInfo>
                <BookHeaderMedium bold>300 zł</BookHeaderMedium>
                <BodyParagraph
                  style={{
                    textDecoration: 'line-through',
                    textAlign: 'center',
                  }}
                  centered
                >
                  400 zł
                </BodyParagraph>
              </PriceInfo>
            </BooksWrapper>
          </div>
        </BooksWrapper>
        <ButtonSpaceBetweenContainer>
          <CodeInput type="number" defaultValue="582413" />
          <Button name="join" primary>
            Dołączam do Gladiatorów
          </Button>
        </ButtonSpaceBetweenContainer>
      </LightBorderContainer>
      <CenteredBodyParagrap marginbottom={6.2}>
        Jeśli wiesz, że jesteś kozakiem programowania i chciałbyś podjąć próbę
        nauki samodzielnie to możesz sprawdzić zbiory oddzielnie
      </CenteredBodyParagrap>
      <BookCardsWrapper ref={ref}>
        <BookCard
          animate={{ opacity: inView ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Red />
          <HeaderSmall bold centered>
            Nieprzewidziane i sprawiające problemy testy JS i React
          </HeaderSmall>
          <CardText>
            Zbiór z zaawansowanymi zadaniami na testy z JS i React
          </CardText>
          <HeaderMedium bold>120 zł</HeaderMedium>
          <LinedParagraph>150 zł</LinedParagraph>
          <Button primary name="order">
            Kliknij, aby zamówić!
          </Button>
        </BookCard>
        <BookCard
          animate={{ opacity: inView ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Yellow />
          <HeaderSmall bold centered>
            Ambitne i wymagające zadania z JS i React
          </HeaderSmall>
          <CardText>Zbiór z zaawansowanymi zadaniami z JS i React</CardText>

          <HeaderMedium bold>120 zł</HeaderMedium>
          <LinedParagraph>150 zł</LinedParagraph>
          <Button primary name="order">
            Kliknij, aby zamówić!
          </Button>
        </BookCard>
        <BookCard
          animate={{ opacity: inView ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
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
