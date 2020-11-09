import React from 'react';
import styled from 'styled-components';

const LayoutFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey_1};
`;

const FooterContainer = styled.div`
  width: 50%;
  margin: auto;
  padding: 70px;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <LayoutFooter>
      <FooterContainer></FooterContainer>
    </LayoutFooter>
  );
};

export default Footer;
