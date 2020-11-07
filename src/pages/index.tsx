import React from "react"
import Layout from "../../template/Layout"
import styled from "styled-components"
import Hello from "../../components/Hello"
import V_1 from "../../static/figures/Vector.svg"
import { FlexEndWrapper, Wrapper } from "../../styles/BasicComponents"
import Problem from "../../components/Problem"

const VectorOne = styled(V_1)`
  position: absolute;
  margin-top: -400px;
  width: 30%;
`

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
    </Layout>
  )
}
