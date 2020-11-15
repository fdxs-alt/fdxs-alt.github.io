import React from 'react';
import Layout from '../../template/Layout';
import styled from 'styled-components';
import {
  BodyParagraph,
  HeaderMedium,
  HeaderSmall,
  Wrapper,
} from '../../styles/BasicComponents';
import ListIcon from '../../../images/icons/menu_icon.svg';
import { DateTitle, Tag } from '../../styles/Blog/CardComponent';
import size from '../../utils/size';
import Image from '../../../images/png/bg.png';
import { IconContainer } from '../../styles/Main';
import CoffeeCup from '../../../images/icons/coffee-cup.svg';
import DoubleCoffeeCup from '../../../images/icons/coffee-double.svg';
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const PostHeader = styled(HeaderSmall)`
  margin: 16px 0;
`;

const PostParagraph = styled(BodyParagraph)`
  margin: 16px 0;
  color: ${(props) => props.theme.colors.grey_2};
`;

const List = styled.ul`
  list-style: none;
  margin: 16px 0;
  color: ${(props) => props.theme.colors.grey_2};
  font-size: 16px;
`;

const ListEl = styled.li`
  margin-bottom: 16px;
`;

const ListDot = styled(ListIcon)`
  margin-right: 12px;
`;

const ExtraInfoWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: flex-end;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -100;
    height: 100%;
    background: url(${Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: ${size.tablet}) {
    min-height: 400px;
  }

  @media (max-width: ${size.small}) {
    min-height: 300px;
    align-items: center;
  }
`;

const Info = styled.div`
  width: 50%;
  padding: 24px;

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }

  @media (max-width: ${size.small}) {
    height: unset;
  }
`;
const WhiteHeader = styled(HeaderMedium)`
  color: ${(props) => props.theme.colors.white};
  margin: 16px 0;

  @media (max-width: ${size.small}) {
    font-size: 22px;
  }
`;
const PostTag = styled(Tag)`
  color: ${(props) => props.theme.colors.grey_5};
  border: 1px solid ${(props) => props.theme.colors.grey_3};
  font-size: 16px;
  @media (max-width: ${size.small}) {
    font-size: 14px;
  }
`;

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  @media (max-width: ${size.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CoffeContainer = styled.div`
  width: 100%;
  box-shadow: 0px 5px 11px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);

  padding: 50px;
  border: 1px solid ${(props) => props.theme.colors.grey_4};
  border-radius: 4px;
  margin-bottom: 50px;
`;
const InnerCoffeeContent = styled.div`
  width: 50%;
  margin: auto;
`;
const CoffeIconsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-around;
`;
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
              Jeśli dowiedziałeś czegoś konkretnego z tego posta, to postaw mi
              kawę, która zasili kolejne posty z materiałami dla programistów!
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
        <CoffeContainer></CoffeContainer>
      </Wrapper>
    </Layout>
  );
};

export default example;
