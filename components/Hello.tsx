import React from "react"
import styled from "styled-components"
import Sitting from "../static/sitting.svg"
import { BodyParagraph, HeaderBig, Button } from "../styles/BasicComponents"

const HelloProgrammerSection = styled.section`
  height: 80vh;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HelloBlock = styled.div`
  width: 50%;
`

const HelloBodyParagrap = styled(BodyParagraph)`
  margin: 24px 0;
`

const Hello = () => {
  return (
    <HelloProgrammerSection>
      <HelloBlock>
        <HeaderBig bold>Hej, programisto!</HeaderBig>
        <HelloBodyParagrap>
          Tworzymy społeczność newbie i junior JS devów, którzy chcą wspólnie
          się uczyć, aby szybciej być gotowym na rynek.
        </HelloBodyParagrap>
        <Button primary>Dołącz do Gladiatorów Javascriptu!</Button>
      </HelloBlock>
      <Sitting />
    </HelloProgrammerSection>
  )
}

export default Hello
