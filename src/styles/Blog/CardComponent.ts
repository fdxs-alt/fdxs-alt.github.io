import { motion } from 'framer-motion';
import size from '../../utils/size';
import styled from 'styled-components';
import Lens from '../../../images/png/lens.png';
export const BlogCard = styled(motion.div)`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.grey_4};
`;

export const ContentContainer = styled.div`
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
`;

export const DateTitle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.grey_1};
  padding: 6px 12px;
  width: fit-content;
`;

export const Tag = styled.div`
  color: ${(props) => props.theme.colors.grey_2};
  border: 1px solid ${(props) => props.theme.colors.grey_4};
  padding: 6px 12px;
  font-size: 14px;
`;

export const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 5px;

  @media (max-width: ${size.laptop}) {
    grid-template-columns: repeat(3, 33%);
  }
`;

export const ImageWrapper = styled.div<IImage>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${Lens});
  background-position: center;
  background-repeat: no-repeat;
  z-index: ${(props) => (props.hovered ? 10 : -10)};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
export const BlogImage = styled.img<IImage>`
  width: 100%;
  height: 100%;
  transition: 300ms ease-out;
  object-fit: cover;
  opacity: ${(props) => (props.hovered ? 0.3 : 1)};
  z-index: 100;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

interface IImage {
  hovered: boolean;
}
