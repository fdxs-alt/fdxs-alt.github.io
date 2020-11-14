import React from 'react';
import Layout from '../../template/Layout';
import styled from 'styled-components';
import {
  BodyParagraph,
  HeaderSmall,
  Wrapper,
} from '../../styles/BasicComponents';
import ListIcon from '../../../images/icons/menu_icon.svg';
import { graphql, StaticQuery } from 'gatsby';
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

const example = () => {
  return (
    <StaticQuery
      query={graphql`
        query postQuery {
          file(relativePath: { eq: "bg.png" }) {
            childImageSharp {
              fixed(quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <Layout>
          <Wrapper>
            <ContentWrapper>
              <PostHeader bold>
                Z uwagi na sezon chorobowy zrobiłem burzę mózgów na temat, który
                ostatnio bardzo zajmuje moją głowę – Jak można poprawić naukę z
                Gladiatorami
              </PostHeader>
              <PostParagraph>
                Przez pierwsze 15 min w Zoomie miałem ustawiony gorszy mikrofon.
                Coś tam da się posłuchać jednak tak 3/10. Od ok 15 minuty już
                normalny mikrofon i bardziej żywa dyskusja. Sorry za problemy
                techniczne i niedopatrzenie
              </PostParagraph>
              <PostParagraph>
                Live Code Review z 15.10.2020 można obejrzeć tutaj:
              </PostParagraph>
              <a href="https://drive.google.com/file/d/1gPbfoSG-ofqZevWtesHnEUZ1ir70Wh10/view?usp=sharing">
                https://drive.google.com/file/d/1gPbfoSG-ofqZevWtesHnEUZ1ir70Wh10/view?usp=sharing
              </a>
              <PostParagraph>
                Dzisiejsze zajęcia były wyjątkowe i bardzo owocne, jednak nie w
                kod, a w koncepcje i rady jak mogę poprawić Gladiatorów i w jaki
                sposób wyklarowała mi się wizja na dalszy rozwój tej
                społeczności 🙂
              </PostParagraph>
              <PostHeader bold>
                Jestem w trakcie pisania posta, który będzie zawierać ostateczne
                zasady społeczności Gladiatorów Javascriptu, ale w skrócie można
                to opisać tak:
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
                  projekty będą realizowane w mniejszych grupach z zarządem PMów
                  i długość projektów do portfolio to max 3 msc
                </ListEl>
                <ListEl>
                  <ListDot />
                  zadania będą realizowane w modelu code pairing w tempie 3
                  zadań na tydzień
                </ListEl>
              </List>
              <PostHeader bold>
                Gladiatorzy zmieniają się w myśl, że nauka programowania to nie
                sprint – to maraton
              </PostHeader>
            </ContentWrapper>
          </Wrapper>
        </Layout>
      )}
    />
  );
};

export default example;
