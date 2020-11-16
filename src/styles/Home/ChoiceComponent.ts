import styled from 'styled-components';
import size from '../../utils/size';
import B from '../../../images/Books.svg';
import {
  BodyParagraph,
  HeaderMedium,
  HeaderSmall,
  SpaceBetweenContainer,
} from '../BasicComponents';
import { Card } from '../Main';
import { motion } from 'framer-motion';

export const LightBorderContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.primary};
  width: 70%;
  padding: 1.5rem;
  margin: 0 auto 100px auto;

  @media (max-width: ${size.tablet}) {
    width: 85%;
  }

  @media (max-width: ${size.small}) {
    width: 95%;
  }
`;

export const Books = styled(B)`
  width: 75%;
  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`;

export const ItemInfo = styled.div`
  width: 70%;
  @media (max-width: ${size.tablet}) {
    width: 80%;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: ${size.tablet}) {
    align-items: center;
  }
`;

export const BookCard = styled(Card)`
  padding: 1.7rem;
  width: 31%;
  box-shadow: 0px 5px 11px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);
  justify-content: space-between;

  @media (max-width: ${size.tablet}) {
    width: 80%;
    margin-bottom: 2em;
    min-height: unset;
  }

  @media (max-width: ${size.mobile}) {
    width: 90%;
  }
`;

export const LinedParagraph = styled(BodyParagraph)`
  margin-bottom: 24px;
  text-decoration: line-through;
`;

export const BookCardsWrapper = styled(SpaceBetweenContainer)`
  padding: 0.6rem;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Comments = styled(motion.img)``;

export const BooksWrapper = styled(SpaceBetweenContainer)`
  width: 100%;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const BooksHeader = styled(HeaderSmall)`
  @media (max-width: ${size.tablet}) {
    text-align: center;
    margin-top: 2em;
  }
`;

export const BookHeaderMedium = styled(HeaderMedium)`
  @media (max-width: ${size.tablet}) {
    text-align: center;
  }
`;

export const BookBodyParagraph = styled(BodyParagraph)`
  @media (max-width: ${size.tablet}) {
    text-align: center;
  }
`;

export const ButtonSpaceBetweenContainer = styled(SpaceBetweenContainer)`
  align-items: center;

  button {
    width: 45%;
  }

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    justify-content: center;
    button,
    input {
      width: 70%;
      margin-top: 1em;
    }
  }

  @media (max-width: ${size.small}) {
    button,
    input {
      width: 95%;
    }
  }
`;

export const CodeInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.grey_3};
  text-align: center;
  &::placeholder {
    color: ${(props) => props.theme.colors.grey_2};
    font-size: 14px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  margin: 0;
  border-radius: 4px;
  font-size: 16px;
  padding: 14px 24px;
  font-weight: 700;
`;
