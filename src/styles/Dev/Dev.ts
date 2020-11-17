import { Link } from 'gatsby';
import styled from 'styled-components';

export const CenteredWrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const GoBackLink = styled(Link)`
  font-weight: 700;
  font-size: 20px;
`;
