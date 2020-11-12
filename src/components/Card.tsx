import React from 'react';
import { HeaderSmall, BodyParagraph } from '../styles/BasicComponents';
import {
  BlogCard,
  ContentContainer,
  DateTitle,
  TagContainer,
  Tag,
} from '../styles/Blog/CardComponent';
import BG from '../../images/png/bg.png';
import useHover from '../utils/useHover';
import styled from 'styled-components';
import Lens from '../../images/png/lens.png';
interface IImage {
  hovered: boolean;
}

const ImageWrapper = styled.div<IImage>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${Lens});
  background-position: center;
  background-repeat: no-repeat;
  max-height: 220px;
  z-index: ${(props) => (props.hovered ? 10 : -10)};
`;
export const BlogImage = styled.img<IImage>`
  width: 100%;
  max-height: 220px;
  opacity: ${(props) => (props.hovered ? 0.3 : 1)};
`;
const Card = () => {
  const { ref, isHovered } = useHover();

  return (
    <BlogCard ref={ref}>
      <ImageWrapper hovered={isHovered}>
        <BlogImage src={BG} hovered={isHovered} />
      </ImageWrapper>
      <ContentContainer>
        <DateTitle>10.11.2020</DateTitle>
        <HeaderSmall style={{ marginTop: '1em' }}>
          Brainstorm w sprawie ulepszenia gladiatorów i szereg nowych zasad
        </HeaderSmall>
        <BodyParagraph sm>
          Zbiór z zaawansowanymi zadaniami na testy z JS i React
        </BodyParagraph>
        <TagContainer>
          <Tag>#akademia</Tag>
          <Tag>#nauka</Tag>
          <Tag>#python</Tag>
          <Tag>#qa</Tag>
        </TagContainer>
      </ContentContainer>
    </BlogCard>
  );
};

export default Card;
