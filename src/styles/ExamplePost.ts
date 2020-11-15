import size from '../utils/size';
import styled from 'styled-components';
import {
  HeaderSmall,
  BodyParagraph,
  HeaderMedium,
  SpaceBetweenContainer,
  Button,
} from './BasicComponents';
import { Tag } from './Blog/CardComponent';
import ListIcon from '../../images/icons/menu_icon.svg';
import Image from '../../images/png/bg.png';
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  margin-bottom: 34px;
`;

export const PostHeader = styled(HeaderSmall)`
  margin: 16px 0;
`;

export const PostParagraph = styled(BodyParagraph)`
  margin: 16px 0;
  color: ${(props) => props.theme.colors.grey_2};
`;

export const List = styled.ul`
  list-style: none;
  margin: 16px 0;
  color: ${(props) => props.theme.colors.grey_2};
  font-size: 16px;
`;

export const ListEl = styled.li`
  margin-bottom: 16px;
`;

export const ListDot = styled(ListIcon)`
  margin-right: 12px;
`;

export const ExtraInfoWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: flex-end;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -100;
    height: 100%;
    background: url(${Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: ${size.tablet}) {
    min-height: 400px;
  }

  @media (max-width: ${size.small}) {
    min-height: 300px;
    align-items: center;
  }
`;

export const Info = styled.div`
  width: 50%;
  padding: 24px;

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }

  @media (max-width: ${size.small}) {
    height: unset;
  }
`;
export const WhiteHeader = styled(HeaderMedium)`
  color: ${(props) => props.theme.colors.white};
  margin: 16px 0;

  @media (max-width: ${size.small}) {
    font-size: 22px;
  }
`;
export const PostTag = styled(Tag)`
  color: ${(props) => props.theme.colors.grey_5};
  border: 1px solid ${(props) => props.theme.colors.grey_3};
  font-size: 16px;
  @media (max-width: ${size.small}) {
    font-size: 14px;
  }
`;

export const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  @media (max-width: ${size.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CoffeContainer = styled.div`
  width: 100%;
  box-shadow: 0px 5px 11px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);

  padding: 50px;
  border: 1px solid ${(props) => props.theme.colors.grey_4};
  border-radius: 4px;
  margin-bottom: 50px;

  @media (max-width: ${size.small}) {
    padding: 25px;
  }
`;
export const InnerCoffeeContent = styled.div`
  width: 50%;
  margin: auto;

  @media (max-width: ${size.tablet}) {
    width: 60%;
  }
  @media (max-width: ${size.small}) {
    width: 80%;
  }

  @media (max-width: ${size.mobile}) {
    width: 100%;
  }
`;
export const CoffeIconsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-around;
`;
export const JoinWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;

export const NewsletterWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 25px;
  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;

export const NewsletterSpacedBetweenContainer = styled(SpaceBetweenContainer)`
  align-items: center;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const JoinHeader = styled(HeaderMedium)`
  @media (max-width: ${size.small}) {
    text-align: center;
  }
`;
export const JoinParagraph = styled(BodyParagraph)`
  @media (max-width: ${size.small}) {
    text-align: center;
  }
`;

export const SendButton = styled(Button)`
  @media (max-width: ${size.small}) {
    width: fit-content;
  }
`;
