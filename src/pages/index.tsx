import React from 'react';
import Layout from '../../template/Layout';
import styled from 'styled-components';
import Hello from '../../components/Hello';
import V_1 from '../../images/figures/Vector.svg';
import { FlexEndWrapper, Wrapper } from '../../styles/BasicComponents';
import Problem from '../../components/Problem';
import Previous from '../../components/Previous';
import MeetMe from '../../components/MeetMe';

const VectorOne = styled(V_1)`
  position: absolute;
  margin-top: -400px;
  width: 30%;
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
    </Layout>
  );
}
