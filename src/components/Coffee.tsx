import React from 'react';
import { HeaderMedium, BodyParagraph } from '../styles/BasicComponents';
import {
  CoffeContainer,
  InnerCoffeeContent,
  CoffeIconsContainer,
} from '../styles/Blog/ExamplePost';
import { Bold, IconContainer } from '../styles/Main';
import CoffeeCup from '../../images/icons/coffee-cup.svg';
import DoubleCoffeeCup from '../../images/icons/coffee-double.svg';
import { useInView } from 'react-intersection-observer';
const Coffee = () => {
  const { inView, ref } = useInView({ triggerOnce: true });

  return (
    <CoffeContainer
      ref={ref}
      animate={{ opacity: inView ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <InnerCoffeeContent>
        <HeaderMedium bold centered>
          Do następnego commita!
        </HeaderMedium>
        <BodyParagraph centered>
          Jeśli dowiedziałeś czegoś konkretnego z tego posta, to
          <Bold> postaw mi kawę</Bold>, która zasili kolejne posty z materiałami
          dla programistów!
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
  );
};

export default Coffee;
