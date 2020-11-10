import styled from 'styled-components';
import size from '../../utils/size';

export const OpinionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 100px;
  align-items: center;

  @media (max-width: ${size.tablet}) {
    width: 60%;
  }

  @media (max-width: ${size.small}) {
    width: 80%;
  }
`;
