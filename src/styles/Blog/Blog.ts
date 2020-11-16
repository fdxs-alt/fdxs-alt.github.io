import V_1 from '../../../images/figures/Vector.svg';
import V_2 from '../../../images/figures/Vector-1.svg';
import styled from 'styled-components';
import size from '../../utils/size';
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
