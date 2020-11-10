import styled from 'styled-components';
import size from '../../utils/size';
import B from '../../../images/Books.svg';
import { BodyParagraph, SpaceBetweenContainer } from '../BasicComponents';
import { Card } from '../Main';

export const LightBorderContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.primary};
  width: 70%;
  padding: 1.5rem;
  margin: 0 auto 100px auto;
`;

export const Books = styled(B)`
  width: 50%;
`;

export const ItemInfo = styled.div`
  width: 60%;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const BookCard = styled(Card)`
  padding: 1.7rem;
  box-shadow: 0px 5px 11.519827842712402px 0px rgba(131, 128, 168, 0.14),
    0px 10px 92px 0px rgba(210, 207, 238, 0.2);
  justify-content: space-between;
`;

export const LinedParagraph = styled(BodyParagraph)`
  margin-bottom: 24px;
  text-decoration: line-through;
`;

export const BookCardsWrapper = styled(SpaceBetweenContainer)`
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Comments = styled.img``;
