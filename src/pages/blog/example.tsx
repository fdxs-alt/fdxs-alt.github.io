import React from 'react';
import Layout from '../../template/Layout';
import {
  BodyParagraph,
  HeaderMedium,
  Wrapper,
} from '../../styles/BasicComponents';
import { DateTitle } from '../../styles/Blog/CardComponent';
import { Bold, IconContainer } from '../../styles/Main';
import CoffeeCup from '../../../images/icons/coffee-cup.svg';
import DoubleCoffeeCup from '../../../images/icons/coffee-double.svg';
import { ContactInput, Label } from '../../styles/Home/ContactComponent';
import {
  CoffeContainer,
  CoffeIconsContainer,
  ExtraInfoWrapper,
  Info,
  InnerCoffeeContent,
  JoinHeader,
  JoinParagraph,
  JoinWrapper,
  List,
  ListDot,
  ListEl,
  NewsletterSpacedBetweenContainer,
  NewsletterWrapper,
  PostHeader,
  PostParagraph,
  PostTag,
  WhiteHeader,
  ContentWrapper,
  SendButton,
  TagContainer,
} from '../../styles/ExamplePost';

const example = () => {
  return (
    <Layout>
      <Wrapper>
        <ExtraInfoWrapper>
          <Info>
            <DateTitle>20.10.2020</DateTitle>
            <WhiteHeader bold>
              Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad
            </WhiteHeader>
            <TagContainer>
              <PostTag>#gladiatorzy</PostTag>
              <PostTag>#nauka</PostTag>
            </TagContainer>
          </Info>
        </ExtraInfoWrapper>
        <ContentWrapper>
          <PostHeader bold>
            Z uwagi na sezon chorobowy zrobiłem burzę mózgów na temat, który
            ostatnio bardzo zajmuje moją głowę – Jak można poprawić naukę z
            Gladiatorami
          </PostHeader>
          <PostParagraph>
            Przez pierwsze 15 min w Zoomie miałem ustawiony gorszy mikrofon. Coś
            tam da się posłuchać jednak tak 3/10. Od ok 15 minuty już normalny
            mikrofon i bardziej żywa dyskusja. Sorry za problemy techniczne i
            niedopatrzenie
          </PostParagraph>
          <PostParagraph>
            Live Code Review z 15.10.2020 można obejrzeć tutaj:
          </PostParagraph>
          <a href="https://drive.google.com/file/d/1gPbfoSG-ofqZevWtesHnEUZ1ir70Wh10/view?usp=sharing">
            https://drive.google.com/file/d/1gPbfoSG-ofqZevWtesHnEUZ1ir70Wh10/view?usp=sharing
          </a>
          <PostParagraph>
            Dzisiejsze zajęcia były wyjątkowe i bardzo owocne, jednak nie w kod,
            a w koncepcje i rady jak mogę poprawić Gladiatorów i w jaki sposób
            wyklarowała mi się wizja na dalszy rozwój tej społeczności 🙂
          </PostParagraph>
          <PostHeader bold>
            Jestem w trakcie pisania posta, który będzie zawierać ostateczne
            zasady społeczności Gladiatorów Javascriptu, ale w skrócie można to
            opisać tak:
          </PostHeader>
          <List>
            <ListEl>
              <ListDot />
              nie będzie to nauka przez 2msc, tylko społeczność której celem
              jest się skutecznie uczyć JSa długofalowo
            </ListEl>
            <ListEl>
              <ListDot />
              co czwartek dalej będą calle z live code review, ale
              najprawdopodobniej zostaną wprowadzone zajęcia 2x w tygodniu
            </ListEl>
            <ListEl>
              <ListDot />
              jednorazowa inwestycja w zestaw 3 zbiorów będzie łączyła się z
              dożywotnim dostępem do Discorda i możliwością ciągłej nauki
            </ListEl>
            <ListEl>
              <ListDot />
              projekty będą realizowane w mniejszych grupach z zarządem PMów i
              długość projektów do portfolio to max 3 msc
            </ListEl>
            <ListEl>
              <ListDot />
              zadania będą realizowane w modelu code pairing w tempie 3 zadań na
              tydzień
            </ListEl>
          </List>
          <PostHeader bold>
            Gladiatorzy zmieniają się w myśl, że nauka programowania to nie
            sprint – to maraton
          </PostHeader>
        </ContentWrapper>
        <CoffeContainer>
          <InnerCoffeeContent>
            <HeaderMedium bold centered>
              Do następnego commita!
            </HeaderMedium>
            <BodyParagraph centered>
              Jeśli dowiedziałeś czegoś konkretnego z tego posta, to
              <Bold> postaw mi kawę</Bold>, która zasili kolejne posty z
              materiałami dla programistów!
            </BodyParagraph>
            <CoffeIconsContainer>
              <IconContainer>
                <CoffeeCup />
              </IconContainer>
              <IconContainer>
                <DoubleCoffeeCup />
              </IconContainer>
            </CoffeIconsContainer>
          </InnerCoffeeContent>
        </CoffeContainer>
        <CoffeContainer>
          <NewsletterSpacedBetweenContainer>
            <JoinWrapper>
              <JoinHeader bold>
                Dołącz do listy mailingowej Gladiatorów Javascriptu!
              </JoinHeader>
              <JoinParagraph>
                Będziesz otrzymywać linki do zajęć z Gladiatorami, przydatne do
                nauki artykuły oraz informacje odnośnie aktualizacji zbiorów.
              </JoinParagraph>
            </JoinWrapper>
            <NewsletterWrapper>
              <Label htmlFor="email">Twój adres email</Label>
              <ContactInput
                type="email"
                required
                placeholder="np. jan@kowalski.pl"
              />
              <SendButton primary type="button" style={{ width: '100%' }}>
                Wyślij wiadomość
              </SendButton>
              <BodyParagraph style={{ fontSize: '12px', marginTop: '16px' }}>
                * Zapisując się do newslettera zgadzasz się na przetwarzanie
                swoich informacji osobowych zgodnie z naszą Polityką
                Prywatności.
              </BodyParagraph>
            </NewsletterWrapper>
          </NewsletterSpacedBetweenContainer>
        </CoffeContainer>
      </Wrapper>
    </Layout>
  );
};

export default example;
