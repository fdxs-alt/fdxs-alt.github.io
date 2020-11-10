import V_4 from '../../../images/figures/Vector-3.svg';
import styled from 'styled-components';
import size from '../../utils/size';

export const VectorFour = styled(V_4)`
  position: absolute;
  margin-top: -350px;
  z-index: -10;

  @media (max-width: ${size.laptop}) {
    width: 30%;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 60%;
  margin: 2em auto;

  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;
