import React from 'react';
import Layout from '../../template/Layout';
import styled from 'styled-components';
import Hello from '../../components/Hello';
import V_1 from '../../images/figures/Vector.svg';
import { FlexEndWrapper, Wrapper } from '../../styles/BasicComponents';
import Problem from '../../components/Problem';
import Previous from '../../components/Previous';
import MeetMe from '../../components/MeetMe';
import V_3 from '../../images/figures/Vector-2.svg';
import Join from '../../components/Join';
import MePrograming from '../../components/MePrograming';
import Opinions from '../../components/Opinions';
import Choice from '../../components/Choice';
import Warranty from '../../components/Warranty';
import Demo from '../../components/Demo';
import V_4 from '../../images/figures/Vector-4.svg';
import Gladiators from '../../components/Gladiators';
import ContactForm from '../../components/ContactForm';
import size from '../../utils/size';
const VectorOne = styled(V_1)`
  position: absolute;
  margin-top: -400px;
  width: 30%;

  @media (max-width: ${size.laptop}) {
    display: none;
  }
`;

const VectorThree = styled(V_3)`
  position: absolute;
  margin-top: -450px;
  width: 25%;

  @media (max-width: ${size.laptop}) {
    display: none;
  }
`;

const VectorFour = styled(V_4)`
  position: absolute;
  z-index: -10;
  margin-top: -100px;

  @media (max-width: ${size.laptop}) {
    display: none;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Hello />
      </Wrapper>
      <FlexEndWrapper>
        <VectorOne />
      </FlexEndWrapper>
      <Problem />
      <Previous />
      <MeetMe />
      <FlexEndWrapper>
        <VectorThree />
      </FlexEndWrapper>
      <MePrograming />
      <Join />
      <Opinions />
      <Choice />
      <FlexEndWrapper>
        <VectorFour />
      </FlexEndWrapper>
      <Demo />
      <Warranty />
      <Gladiators />
      <ContactForm />
    </Layout>
  );
}
