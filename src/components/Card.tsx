import React from 'react';
import { HeaderSmall, BodyParagraph } from '../styles/BasicComponents';
import {
  BlogCard,
  ContentContainer,
  DateTitle,
  TagContainer,
  Tag,
  BlogImage,
  ImageWrapper,
} from '../styles/Blog/CardComponent';
import BG from '../../images/png/bg.png';
import useHover from '../utils/useHover';
import { useInView } from 'react-intersection-observer';
import { navigate } from 'gatsby';

const Card = () => {
  const { ref, isHovered } = useHover();
  const { ref: viewRef, inView } = useInView({ triggerOnce: true });
  return (
    <BlogCard
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      onClick={() => navigate('/example')}
    >
      <ImageWrapper hovered={isHovered} ref={viewRef}>
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
