import React from "react"
import { BodyParagraph, HeaderBig, Wrapper } from "../styles/BasicComponents"
import styled from "styled-components"
interface IGridItem {
  reverse?: boolean
}

const ProblemSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const GridItem = styled.div<IGridItem>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  line-height: 25px;
  text-align: ${props => (props.reverse ? "start" : "end")};
`

const Icon = styled.img`
  width: 90px;
  height: 90px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
`

const Problem = () => {
  return (
    <Wrapper>
      <ProblemSection>
        <HeaderBig bold>Zapewne masz problem..</HeaderBig>
        <BodyParagraph
          style={{ width: "50%", textAlign: "center", marginBottom: "4rem" }}
        >
          Jako młody programista na codzień mierzysz sie z poniższymi
          problemami:
        </BodyParagraph>
        <Grid>
          <GridItem>
            <BodyParagraph>
              Jak skutecznie mam się rozwijać i które umiejętności są istotne?
            </BodyParagraph>
            <Icon />
          </GridItem>
          <GridItem reverse>
            <BodyParagraph>
              Gdzie znajdę doświadczonego kolegę, który sprawdzi mój kod?
            </BodyParagraph>
            <Icon />
          </GridItem>
          <GridItem>
            <BodyParagraph>
              Gdzie mogę znaleźć praktyczne zadania programistyczne, które
              stanowią wyzwanie i zapewnią rozwój?
            </BodyParagraph>
            <Icon />
          </GridItem>
          <GridItem reverse>
            <BodyParagraph>
              Gdzie znajdę osoby chętne do współpracy przy projektach?
            </BodyParagraph>
            <Icon />
          </GridItem>
        </Grid>
      </ProblemSection>
    </Wrapper>
  )
}

export default Problem
