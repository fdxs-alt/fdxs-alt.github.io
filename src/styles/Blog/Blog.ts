import V_1 from '../../../images/figures/Vector.svg';
import V_2 from '../../../images/figures/Vector-1.svg';
import styled from 'styled-components';
import size from '../../utils/size';
import { SpaceBetweenContainer } from '../BasicComponents';
export const BlogGrid = styled.section`
  display: grid;
  margin: auto;
  width: 100%;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(4, 25%);
  column-gap: 1rem;
  @media (max-width: ${size.laptop}) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(6, 16.5%);
  }

  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
`;

export const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 0 auto 200px auto;
  position: relative;
  @media (max-width: ${size.laptop}) {
    width: 80%;
  }

  @media (max-width: ${size.tablet}) {
    width: 85%;
  }

  @media (max-width: ${size.small}) {
    width: 90%;
  }
`;

export const VectorOne = styled(V_1)`
  position: absolute;
  max-width: 375px;
  margin-top: 0;
  @media (max-width: ${size.tablet}) {
    display: none;
  }
  z-index: -1000;
`;
export const VectorTwo = styled(V_2)`
  position: absolute;
  width: 375px;
  margin-top: -80%;
  @media (max-width: ${size.tablet}) {
    display: none;
  }
  z-index: -1000;
`;
export const SortTittle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;

  &:hover,
  :focus {
    ul {
      opacity: 1;
      top: 20px;
    }
  }
`;

export const SortedList = styled.ul`
  position: absolute;
  list-style-type: none;
  width: 50%;
  cursor: pointer;
  top: 0;
  opacity: 0;
  transition: 200ms ease;
  width: 55%;
`;

export const SortedWrapper = styled(SpaceBetweenContainer)`
  align-items: center;
`;

export const SelectedSort = styled.p`
  text-decoration: underline;
  margin-left: 5px;
`;

export const SortedElement = styled.li`
  padding: 0.6rem 0;
  margin-top: 5px;
  background-color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.grey_3};
  text-align: center;
  box-sizing: content-box;
  outline: none;
  &:hover,
  :focus {
    font-weight: 500;
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;
