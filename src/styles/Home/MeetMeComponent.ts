import PortraitSVG from '../../../images/Image.svg';
import styled from 'styled-components';
import size from '../../utils/size';
import { CenteredBodyParagrap } from '../Main';

export const Portrait = styled(PortraitSVG)`
  @media (max-width: ${size.small}) {
    width: 150px;
    height: 150px;
  }
`;

export const AboutMeParagraph = styled(CenteredBodyParagrap)`
  position: relative;
  &::before {
    content: '“';
    position: absolute;
    top: 0;
    font-weight: 700;
    font-size: 34px;
    top: -10px;
    left: -10px;
  }
`;
