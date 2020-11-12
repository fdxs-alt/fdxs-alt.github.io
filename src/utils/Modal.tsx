import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
export const Wrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IModal {
  isOpen: boolean;
}
const Modal: React.FC<IModal> = ({ children }) => {
  return (
    <Wrapper
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{
        type: 'spring',
        stiffness: 90,
        duration: 0.2,
        damping: 15,
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Wrapper>
  );
};

export default Modal;
