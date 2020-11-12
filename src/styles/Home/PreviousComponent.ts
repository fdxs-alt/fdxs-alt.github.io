import { motion } from 'framer-motion';
import styled from 'styled-components';
import size from '../../utils/size';

export const Grid = styled(motion.div)`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(7, 90px);
  grid-template-rows: repeat(3, 90px);
  gap: 1rem;

  @media (max-width: ${size.tablet}) {
    grid-template-columns: repeat(4, 90px);
    grid-template-rows: repeat(3, 90px);
  }

  @media (max-width: ${size.small}) {
    grid-template-columns: repeat(3, 90px);
    grid-template-rows: repeat(2, 90px);
  }
`;
