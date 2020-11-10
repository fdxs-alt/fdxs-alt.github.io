import styled from 'styled-components';
import size from '../../utils/size';
import { CardsWrapper } from '../Main';
import V_6 from '../../../images/figures/Vector-5.svg';
export const VectorSix = styled(V_6)`
  margin-top: -100px;
  position: absolute;

  @media (max-width: ${size.laptop}) {
    width: 20%;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

export const GladiatorsWrapper = styled(CardsWrapper)`
  width: 70%;
  margin: 2rem auto 200px auto;
`;
