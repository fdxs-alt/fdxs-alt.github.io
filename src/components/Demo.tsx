import React from 'react';
import { HelloBlock as InfoBlock, HelloBodyParagrap } from '../styles/Main';
import {
  BodyParagraph,
  Button,
  HeaderBig,
  HeaderSmall,
} from '../styles/BasicComponents';
import {
  DemoWrapper,
  PrimaryBorderContainer,
  Container,
  Logo,
} from '../styles/Home/DemoComponent';

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
          <Button primary name="sendbtn">
            Kliknij, aby zamówić!
          </Button>
        </PrimaryBorderContainer>
      </Container>
    </DemoWrapper>
  );
};

export default Demo;
