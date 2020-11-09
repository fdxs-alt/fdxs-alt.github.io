import { Link } from 'gatsby';
import styled from 'styled-components';
import { BodyParagraph } from './BasicComponents';
import V_2 from '../images/figures/Vector-1.svg';
import logo from '../images/logo.svg';
interface IGridItem {
  reverse?: boolean;
}

export const ProblemSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const GridItem = styled.div<IGridItem>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  line-height: 25px;
  text-align: ${(props) => (props.reverse ? 'start' : 'end')};
`;

export const GridItemBody = styled(BodyParagraph)<IGridItem>`
  width: calc(100% - 90px);
  margin-left: ${(props) => (props.reverse ? '16px' : '0')};
  margin-right: ${(props) => (props.reverse ? '0' : '16px')};
`;

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const VectorTwo = styled(V_2)`
  position: absolute;
  width: 450px;
  margin-top: -45%;
  margin-left: -50px;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 100px 0;
`;

export const Card = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardText = styled(BodyParagraph)`
  width: 90%;
  text-align: center;
  margin-top: 2rem;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  align-items: center;
`;

export const Logo = styled(logo)`
  width: 60px;
  height: 60px;
`;
export const MenuBar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;
export const MenuItem = styled.li`
  padding: 8px 12px;
`;

export const MenuLink = styled(Link)<IMenuLink>`
  text-decoration: ${(props) =>
    props.location === props.to ? 'underline' : 'none'};
  color: ${(props) => props.theme.colors.grey_1};
  font-weight: 700;
  transition: 200ms ease;

  &:focus,
  :hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const HelloProgrammerSection = styled.section`
  height: 60vh;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HelloBlock = styled.div`
  width: 50%;
`;

export const HelloBodyParagrap = styled(BodyParagraph)`
  margin: 24px 0;
`;

interface IMenuLink {
  to: string;
  location: string;
}

interface IBodyParagraph {
  marginbottom?: number;
  width?: number;
}

export const CenteredBodyParagrap = styled(BodyParagraph)<IBodyParagraph>`
  width: ${(props) => (props.width ? props.width + '%' : '50%')};
  text-align: center;
  margin: auto;
  margin-bottom: ${(props) => props.marginbottom + 'rem'};
`;

export const Container = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
