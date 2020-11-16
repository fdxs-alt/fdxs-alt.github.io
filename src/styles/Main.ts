import { Link } from 'gatsby';
import styled from 'styled-components';
import { BodyParagraph, Button } from './BasicComponents';
import V_2 from '../../images/figures/Vector-1.svg';
import logo from '../../images/logo.svg';
import size from '../utils/size';
import { motion } from 'framer-motion';

interface IGridItem {
  reverse?: boolean;
}

export const Bold = styled.b`
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey_1};
`;

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

  @media (max-width: ${size.small}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const GridItem = styled(motion.div)<IGridItem>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  line-height: 25px;

  @media (max-width: ${size.small}) {
    padding: 1em;
  }
`;

export const GridItemBody = styled(BodyParagraph)<IGridItem>`
  width: calc(100% - 90px);
  margin-left: ${(props) => (props.reverse ? '16px' : '0')};
  margin-right: ${(props) => (props.reverse ? '0' : '16px')};
  text-align: ${(props) => (props.reverse ? 'start' : 'end')};
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
  margin-left: -100px;
  @media (max-width: ${size.laptop}) {
    width: 30%;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

export const CardsWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 100px 0;
  align-items: center;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

export const Card = styled(motion.div)`
  width: 33%;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${size.tablet}) {
    width: 80%;
    margin-bottom: 2em;
    min-height: unset;
  }

  @media (max-width: ${size.mobile}) {
    width: 90%;
  }
`;

export const CardText = styled(BodyParagraph)`
  width: 90%;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: ${size.small}) {
    width: 100%;
  }
`;

export const Navbar = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  width: 60%;
  max-width: 1000px;
  padding: 1rem;
  align-items: center;
  margin: auto;

  @media (max-width: ${size.laptop}) {
    width: 75%;
  }

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }

  @media (max-width: ${size.small}) {
    width: 90%;
  }
`;

export const Logo = styled(logo)`
  width: 60px;
  height: 60px;
`;
export const BigLogo = styled(logo)`
  width: 100px;
  height: 100px;
`;
export const MenuBar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;
export const MenuItem = styled(motion.li)`
  padding: 8px 12px;

  @media (max-width: ${size.tablet}) {
    padding: 1.2rem;
    font-size: 15px;
  }
`;

export const MenuLink = styled(Link)<IMenuLink>`
  text-decoration: ${(props) =>
    props.location === props.to ? 'underline' : 'none'};
  color: ${(props) => props.theme.colors.grey_1};
  font-weight: 700;
  transition: 200ms ease;
  outline: none;
  &:focus,
  :hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const HelloProgrammerSection = styled.section`
  height: 60vh;
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    justify-content: center;
    margin: 8em 0;
  }
`;

export const HelloBlock = styled(motion.div)`
  width: 50%;

  @media (max-width: ${size.tablet}) {
    width: 100%;
    text-align: center;
    margin: 2em 0;
  }
`;

export const HelloBodyParagrap = styled(BodyParagraph)`
  margin: 24px 0;

  @media (max-width: ${size.tablet}) {
    text-align: center;
  }
`;

interface IMenuLink {
  to: string;
  location?: string;
}

interface IBodyParagraph {
  marginbottom?: number;
  width?: number;
}

export const CenteredBodyParagrap = styled(BodyParagraph)<IBodyParagraph>`
  width: ${(props) => (props.width ? props.width + '%' : '50%')};
  text-align: center;
  margin: 2em auto;
  margin-bottom: ${(props) => props.marginbottom + 'rem'};

  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;

export const Container = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OpenButton = styled(motion.button)`
  border: none;
  background-color: inherit;
  outline: none;
  cursor: pointer;
`;

export const LinksContainerColumn = styled(motion.ul)`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const MenuButton = styled(Button)`
  font-size: 14px;
`;
