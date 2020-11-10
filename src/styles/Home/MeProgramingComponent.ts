import styled from 'styled-components';
import { HeaderMedium } from '../BasicComponents';

export const Decorated = styled.b`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.primary};
`;

export const SolutionHeader = styled(HeaderMedium)`
  width: 40%;
  text-align: center;
  margin: 0;
`;
