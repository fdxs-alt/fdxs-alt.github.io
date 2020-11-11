import React from 'react';
import styled from 'styled-components';
export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Modal;
