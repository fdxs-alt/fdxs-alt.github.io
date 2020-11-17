import { Link } from 'gatsby';
import size from '../utils/size';
import styled from 'styled-components';
import { SpaceBetweenContainer } from './BasicComponents';

export const LayoutFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey_1};
`;
export const FooterContainer = styled.div`
  width: 55%;
  padding-bottom: 50px;
  padding-top: 70px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }

  @media (max-width: ${size.small}) {
    width: 90%;
    justify-content: center;
  }
`;

export const Container = styled(SpaceBetweenContainer)`
  width: 55%;

  @media (max-width: ${size.small}) {
    flex-direction: column-reverse;
  }
`;

export const LinksWrapper = styled(SpaceBetweenContainer)`
  min-width: 15%;
  align-items: center;
  @media (max-width: ${size.small}) {
    width: 40%;
    margin-bottom: 2rem;
  }
`;

export const MainLogo = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: ${size.small}) {
    width: 50px;
    height: 50px;
    margin-bottom: 2rem;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  padding: 0.6rem 0;
  margin-bottom: 6px 0;
  transition: 200ms ease;
  outline: none;
  &:focus,
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const LogoWraper = styled(SpaceBetweenContainer)`
  width: 40%;

  @media (max-width: ${size.small}) {
    flex-direction: column;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CopyrightTitle = styled.p`
  font-size: 12px;
  align-self: center;
  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;
