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
const VectorOne = styled(V_1)`
  position: absolute;
  margin-top: -400px;
  width: 30%;
`;

const VectorThree = styled(V_3)`
  position: absolute;
  margin-top: -450px;
  width: 25%;
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
      <Warranty />
    </Layout>
  );
}
