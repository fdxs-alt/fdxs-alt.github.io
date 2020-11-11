import logo from '../../../images/logo.svg';
import size from '../../utils/size';
import styled from 'styled-components';
import { Wrapper, SpaceBetweenContainer } from '../BasicComponents';

export const Logo = styled(logo)`
  width: 150px;
  height: 150px;
  margin-bottom: 24px;
`;

export const DemoWrapper = styled(Wrapper)`
  padding: 100px 125px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);

  @media (max-width: ${size.tablet}) {
    padding: 50px 0;
  }
`;

export const Container = styled(SpaceBetweenContainer)`
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`;

export const PrimaryBorderContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.primary};
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1.5em;
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);

  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;
