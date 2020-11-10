import React from 'react';
import styled from 'styled-components';
import {
  BodyParagraph,
  Button,
  HeaderBig,
  HeaderSmall,
  SpaceBetweenContainer,
  Wrapper,
} from '../styles/BasicComponents';
import logo from '../images/logo.svg';
import { HelloBlock as InfoBlock, HelloBodyParagrap } from '../styles/Main';
import size from '../utils/size';

const Logo = styled(logo)`
  width: 150px;
  height: 150px;
  margin-bottom: 24px;
`;

const DemoWrapper = styled(Wrapper)`
  padding: 100px 125px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);

  @media (max-width: ${size.tablet}) {
    padding: 50px 0;
  }
`;

const Container = styled(SpaceBetweenContainer)`
  align-items: center;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`;

const PrimaryBorderContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.primary};
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);

  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;

const Demo = () => {
  return (
    <DemoWrapper>
      <Container>
        <InfoBlock>
          <HeaderBig bold end>
            Nie wiesz, który zestaw wybrać?
          </HeaderBig>
          <HelloBodyParagrap end style={{ padding: '1rem' }}>
            Nie kupuj kota w worku! Sprawdź czy Twój poziom frontendowych
            umiejętności pozwala na dalszy rozwój z moimi zbiorami!
          </HelloBodyParagrap>
        </InfoBlock>
        <PrimaryBorderContainer>
          <Logo />
          <HeaderSmall centered bold>
            Demo Zbiorów - 15 zadań rekrutacyjnych
          </HeaderSmall>
          <BodyParagraph centered>
            Sprawdź swój poziom, zweryfikuj umiejętności i rozwijaj się dalej z
            moimi zbiorami!
          </BodyParagraph>
          <HeaderSmall centered bold>
            21 zł
          </HeaderSmall>
          <Button primary>Kliknij, aby zamówić!</Button>
        </PrimaryBorderContainer>
      </Container>
    </DemoWrapper>
  );
};

export default Demo;
